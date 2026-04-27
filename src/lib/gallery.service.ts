import { unstable_cache } from "next/cache";

import { getCloudinary } from "./cloudinary.server";

export interface PhotoDto {
  public_id: string;
  url: string;
  tags: string[];
  created_at: string;
  width?: number;
  height?: number;
  folder?: string;
  title?: string;
  alt?: string;
}

export interface AlbumMetadataDto {
  title: string;
  folder: string;
  coverUrl: string;
  tags: string[];
  created_at: string;
}

export interface GalleryManifestDto {
  albums: AlbumMetadataDto[];
  photosByAlbum: Record<string, PhotoDto[]>;
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

interface CloudinaryResourcesResponse {
  resources: CloudinaryResource[];
  next_cursor?: string;
}

function optimizeUrl(url: string) {
  return url
    .replace("upload/", "upload/f_auto,q_auto/")
    .replace("http://", "https://");
}

function getAlbumNameFromPublicId(publicId: string) {
  // np. gallery/Warszawa/001-zdjecie
  const parts = publicId.split("/");
  return parts.length >= 3 ? parts[1] : undefined;
}

function getPhotoFileNameFromPublicId(publicId: string) {
  const parts = publicId.split("/");
  return parts[parts.length - 1] ?? publicId;
}

function sortPhotosAlphabetically(a: PhotoDto, b: PhotoDto) {
  const aName = getPhotoFileNameFromPublicId(a.public_id);
  const bName = getPhotoFileNameFromPublicId(b.public_id);

  return aName.localeCompare(bName, "pl", {
    numeric: true,
    sensitivity: "base",
  });
}

function isRealImageResource(resource: CloudinaryResource) {
  return resource.bytes !== 0;
}

async function fetchAllGalleryResourcesFromCloudinary(): Promise<PhotoDto[]> {
  const cloudinary = getCloudinary();

  const photos: PhotoDto[] = [];
  let nextCursor: string | undefined;

  do {
    const response = (await cloudinary.api.resources({
      type: "upload",
      prefix: "gallery/",
      max_results: 500,
      next_cursor: nextCursor,
      tags: true,
    })) as CloudinaryResourcesResponse;

    const mappedPhotos = response.resources
      .filter(isRealImageResource)
      .map((resource) => {
        const folder = getAlbumNameFromPublicId(resource.public_id);

        return {
          public_id: resource.public_id,
          url: optimizeUrl(resource.secure_url),
          tags: resource.tags ?? [],
          created_at: resource.created_at,
          width: resource.width,
          height: resource.height,
          folder,
          title: folder ?? resource.public_id,
          alt: folder ?? resource.public_id,
        };
      })
      .filter((photo) => Boolean(photo.folder));

    photos.push(...mappedPhotos);

    nextCursor = response.next_cursor;
  } while (nextCursor);

  return photos;
}

async function buildGalleryManifest(): Promise<GalleryManifestDto> {
  const photos = await fetchAllGalleryResourcesFromCloudinary();

  const photosByAlbum = photos.reduce<Record<string, PhotoDto[]>>(
    (acc, photo) => {
      if (!photo.folder) return acc;

      if (!acc[photo.folder]) {
        acc[photo.folder] = [];
      }

      acc[photo.folder].push(photo);

      return acc;
    },
    {},
  );

  for (const albumPhotos of Object.values(photosByAlbum)) {
    albumPhotos.sort(sortPhotosAlphabetically);
  }

  const albums = Object.entries(photosByAlbum)
    .map(([folder, albumPhotos]) => {
      const cover = albumPhotos[0];

      return {
        title: folder,
        folder,
        coverUrl: cover.url,
        tags: cover.tags ?? [],
        created_at: cover.created_at ?? "",
      };
    })
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );

  return {
    albums,
    photosByAlbum,
  };
}

export const getGalleryManifest = unstable_cache(
  async () => buildGalleryManifest(),
  ["cloudinary-gallery-manifest-v3"],
  {
    revalidate: 3600,
    tags: ["cloudinary-gallery"],
  },
);

export async function getAlbumList(): Promise<AlbumMetadataDto[]> {
  const manifest = await getGalleryManifest();
  return manifest.albums;
}

export async function getAlbumPhotos(folder: string): Promise<PhotoDto[]> {
  const manifest = await getGalleryManifest();
  return manifest.photosByAlbum[folder] ?? [];
}

async function fetchAboutMePhotosFromCloudinary() {
  const cloudinary = getCloudinary();

  const photos: PhotoDto[] = [];
  let nextCursor: string | undefined;

  do {
    const response = (await cloudinary.api.resources({
      type: "upload",
      prefix: "AboutMe/",
      max_results: 500,
      next_cursor: nextCursor,
      tags: true,
    })) as CloudinaryResourcesResponse;

    photos.push(
      ...response.resources.filter(isRealImageResource).map((resource) => ({
        public_id: resource.public_id,
        url: optimizeUrl(resource.secure_url),
        tags: resource.tags ?? [],
        created_at: resource.created_at,
        width: resource.width,
        height: resource.height,
        alt: "About me",
        title: "About me",
      })),
    );

    nextCursor = response.next_cursor;
  } while (nextCursor);

  return photos;
}

async function fetchHomepagePhotosFromCloudinary(folder: string) {
  const cloudinary = getCloudinary();

  const response = (await cloudinary.api.resources({
    type: "upload",
    prefix: folder,
    max_results: 100,
    tags: true,
  })) as CloudinaryResourcesResponse;

  return response.resources.filter(isRealImageResource).map((resource) => ({
    public_id: resource.public_id,
    url: optimizeUrl(resource.secure_url),
    tags: resource.tags ?? [],
    created_at: resource.created_at,
    width: resource.width,
    height: resource.height,
    alt: folder,
    title: folder,
    folder,
  }));
}

export const getAboutPhotos = unstable_cache(
  async () => fetchAboutMePhotosFromCloudinary(),
  ["about-photos-v2"],
  {
    revalidate: 3600,
    tags: ["cloudinary-about"],
  },
);

export const getHomepagePhotos = (folder: string) =>
  unstable_cache(
    async () => fetchHomepagePhotosFromCloudinary(folder),
    ["home-photos-v2", folder],
    {
      revalidate: 3600,
      tags: ["cloudinary-home"],
    },
  )();
