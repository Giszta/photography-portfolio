// app/utils/cloudinary.ts
export async function fetchAlbumPhotosFromCloudinary() {
	const res = await fetch("/api/getFolders");
	if (!res.ok) {
		throw new Error("Failed to fetch folders");
	}
	const folders = await res.json();

	const albumPhotos = await Promise.all(
		folders.map(async (folder) => {
			const res = await fetch(`/api/getPhotos/${folder.name}`);
			if (!res.ok) {
				throw new Error(`Failed to fetch photos for folder: ${folder.name}`);
			}
			const photos = await res.json();
			return photos.map((photo) => ({
				...photo,
				title: folder.name,
				tag: ["Wszystkie", "Europa"], // Możesz modyfikować tagi zgodnie z wymaganiami
				src: photo.url || "/path/to/default/image.jpg", // Dodaj wartość domyślną dla src
			}));
		})
	);

	return albumPhotos;
}
