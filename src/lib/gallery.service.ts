import { unstable_cache } from "next/cache";
import { getCloudinary } from "./cloudinary.server";

export interface PhotoDto {
  public_id: string;
  url: string;
  tags: string[];
  created_at: string;
  width?: number;
  height?: number;
}

export interface AlbumMetadataDto {
  title: string;
  folder: string;
  coverUrl: string;
  tags: string[];
  created_at: string;
}

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  tags?: string[];
  created_at: string;
  width?: number;
  height?: number;
  bytes?: number;
}

function optimizeUrl(url: string) {
  return url
    .replace("upload/", "upload/f_auto,q_auto/")
    .replace("http://", "https://");
}

async function fetchFolderNamesFromCloudinary() {
  const cloudinary = getCloudinary();
  const result = await cloudinary.api.sub_folders("gallery");

  return result.folders.map((folder: { name: string; path: string }) => ({
    name: folder.name,
    path: folder.path,
  }));
}

async function fetchPhotosFromFolder(folder: string, coverOnly = false) {
  const cloudinary = getCloudinary();
  const photos: PhotoDto[] = [];
  let nextCursor: string | undefined = undefined;

  do {
    const resources = await cloudinary.api.resources({
      type: "upload",
      prefix: `gallery/${folder}/`,
      max_results: coverOnly ? 1 : 500,
      next_cursor: nextCursor,
      tags: true,
    });

    photos.push(
      ...(resources.resources
        .map((resource: CloudinaryResource) => {
          if (resource.bytes === 0) return undefined;

          return {
            public_id: resource.public_id,
            url: optimizeUrl(resource.secure_url),
            tags: resource.tags ?? [],
            created_at: resource.created_at,
            width: resource.width,
            height: resource.height,
          };
        })
        .filter(Boolean) as PhotoDto[]),
    );

    nextCursor = resources.next_cursor;
  } while (nextCursor && !coverOnly);

  return photos;
}

async function fetchAboutMePhotosFromCloudinary() {
  const cloudinary = getCloudinary();
  const photos: PhotoDto[] = [];
  let nextCursor: string | undefined = undefined;

  do {
    const resources = await cloudinary.api.resources({
      type: "upload",
      prefix: "AboutMe/",
      max_results: 500,
      next_cursor: nextCursor,
      tags: true,
    });

    photos.push(
      ...resources.resources.map((resource: CloudinaryResource) => ({
        public_id: resource.public_id,
        url: optimizeUrl(resource.secure_url),
        tags: resource.tags ?? [],
        created_at: resource.created_at,
        width: resource.width,
        height: resource.height,
      })),
    );

    nextCursor = resources.next_cursor;
  } while (nextCursor);

  return photos;
}

async function fetchHomepagePhotosFromCloudinary(folder: string) {
  const cloudinary = getCloudinary();

  const resources = await cloudinary.api.resources({
    type: "upload",
    prefix: folder,
    max_results: 100,
  });

  return resources.resources.map((resource: CloudinaryResource) => ({
    public_id: resource.public_id,
    url: optimizeUrl(resource.secure_url),
    tags: [],
    created_at: "",
    width: resource.width,
    height: resource.height,
  }));
}

export const getAlbumList = unstable_cache(
  async (): Promise<AlbumMetadataDto[]> => {
    const folders = await fetchFolderNamesFromCloudinary();

    const albums = await Promise.all(
      folders.map(async (folder: { name: string; path: string }) => {
        const coverPhotos = await fetchPhotosFromFolder(folder.name, true);
        const cover = coverPhotos[0];

        if (!cover) return null;

        return {
          title: folder.name,
          folder: folder.name,
          coverUrl: cover.url,
          tags: cover.tags ?? [],
          created_at: cover.created_at ?? "",
        };
      }),
    );

    return albums
      .filter((album): album is AlbumMetadataDto => Boolean(album))
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
  },
  ["albums-list"],
  { revalidate: 3600 },
);

export const getAlbumPhotos = (folder: string) =>
  unstable_cache(
    async () => fetchPhotosFromFolder(folder, false),
    ["album-photos", folder],
    { revalidate: 3600 },
  )();

export const getAboutPhotos = unstable_cache(
  async () => fetchAboutMePhotosFromCloudinary(),
  ["about-photos"],
  { revalidate: 3600 },
);

export const getHomepagePhotos = (folder: string) =>
  unstable_cache(
    async () => fetchHomepagePhotosFromCloudinary(folder),
    ["home-photos", folder],
    { revalidate: 3600 },
  )();
