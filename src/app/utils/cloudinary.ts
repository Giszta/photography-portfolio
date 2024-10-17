interface PhotoType {
	public_id: string;
	url: string;
	tags: string[];
	width: number;
	height: number;
}
export async function fetchAlbumPhotosFromCloudinary() {
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
			return photos.map((photo) => ({
				...photo,
				title: folder.name,
				tag: photo.tags || ["Wszystkie"],
				src: photo.url
					.replace("upload/", "upload/f_auto,q_auto/")
					.replace("http://", "https://"),
			}));
		})
	);

	return albumPhotos;
}
export async function fetchAboutMePhotosFromCloudinary() {
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

// utils/cloudinary.ts

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
