interface PhotoType {
	public_id: string;
	url: string;
	tags: string[];
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
