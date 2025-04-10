export interface PhotoType {
	alt: string;
	created_at: Date;
	height: number;
	length: number;
	public_id: string;
	tags: string[];
	title: string;
	url: string;
	width: number;
	folder: string;
}
export interface AlbumMetadata {
	title: string;
	folder: string;
	coverUrl: string;
	tags: string[];
	created_at: string;
}

export async function fetchAlbumPhotosFromCloudinary(): Promise<PhotoType[][]> {
	const res = await fetch("/api/getFolders");

	if (!res.ok) {
		throw new Error("Failed to fetch folders");
	}
	const folders: { name: string }[] = await res.json();

	const albumPhotos = await Promise.all(
		folders.map(async (folder) => {
			const res = await fetch(`/api/getPhotos/${folder.name}`);
			if (!res.ok) {
				throw new Error(`Failed to fetch photos for folder: ${folder.name}`);
			}
			const photos: PhotoType[] = await res.json();
			const d = photos.map((photo) => ({
				...photo,
				title: folder.name,
				tag: photo.tags || ["Wszystkie"],
				src: photo.url
					.replace("upload/", "upload/f_auto,q_auto/")
					.replace("http://", "https://"),
			}));
			return d;
		})
	);

	return albumPhotos;
}
export async function fetchAboutMePhotosFromCloudinary(): Promise<PhotoType[]> {
	try {
		const res = await fetch("/api/getAboutMePhotos");
		if (!res.ok) {
			throw new Error("Failed to fetch AboutMe photos");
		}
		const photos: PhotoType[] = await res.json();
		return photos.map((photo) => ({
			...photo,
			src: photo.url
				.replace("upload/", "upload/f_auto,q_auto/")
				.replace("http://", "https://"),
			width: photo.width,
			height: photo.height,
		}));
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function fetchPhotosByFolder(folder: string) {
	try {
		const response = await fetch(`/api/getHomepagePhotos?folder=${folder}`);
		const data = await response.json();

		if (response.ok) {
			return data;
		} else {
			console.error("Error fetching photos from API:", data.error);
			return [];
		}
	} catch (error) {
		console.error("Error fetching photos from API:", error);
		return [];
	}
}

export async function fetchAlbumMetadataFromCloudinary(): Promise<
	AlbumMetadata[]
> {
	const res = await fetch("/api/getFolders", {
		cache: "no-store",
	});
	const folders = await res.json();

	const albumMetadata: AlbumMetadata[] = await Promise.all(
		folders.map(async (folder: { name: string; path: string }) => {
			const folderName = folder.name;
			const response = await fetch(
				`/api/getPhotos/${folderName}?coverOnly=true`
			);
			const photos = await response.json();

			const cover = photos[0];
			return {
				title: folderName,
				folder: folderName,
				coverUrl: cover?.url,
				tags: cover?.tags ?? [],
				created_at: cover?.created_at ?? "",
			};
		})
	);

	return albumMetadata.filter((album) => album.coverUrl);
}
