export interface Photo {
	id: number;
	class: string;
	title: string;
	filter: string;
	src: string;
}
export interface AlbumPhotos {
	[album: string]: Photo[];
}
