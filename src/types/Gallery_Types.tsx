export interface Photo {
	id: number;
	class: string;
	title: string;
	filter?: string;
	src: string;
	tag: [string, string];
}
export interface AlbumPhotos {
	[album: string]: Photo[];
}
