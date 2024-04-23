import { AlbumPhotos, Photo } from "@/types/Gallery_Types";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AlbumItem from "./components/AlbumItem";

const allAlbumPhotos: AlbumPhotos = {
	graffiti: [
		{
			id: 1,
			class: "thumbnail first",
			title: "Graffity",
			filter: "inne",
			src: "/gallery/Graffiti/001.jpg",
		},
		{
			id: 2,
			class: "thumbnail",
			title: "Graffity",
			filter: "inne",
			src: "./img/gallery/graffiti/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Graffity",
			filter: "inne",
			src: "./img/gallery/graffiti/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Graffity",
			filter: "inne",
			src: "./img/gallery/graffiti/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Graffity",
			filter: "inne",
			src: "./img/gallery/graffiti/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Graffity",
			filter: "inne",
			src: "./img/gallery/graffiti/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Graffity",
			filter: "inne",
			src: "./img/gallery/graffiti/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Graffity",
			filter: "inne",
			src: "./img/gallery/graffiti/008.jpg",
		},
		{
			id: 9,
			class: "thumbnail",
			title: "Graffity",
			filter: "inne",
			src: "./img/gallery/graffiti/009.jpg",
		},
		{
			id: 10,
			class: "thumbnail",
			title: "Graffity",
			filter: "inne",
			src: "./img/gallery/graffiti/010.jpg",
		},
		{
			id: 11,
			class: "thumbnail",
			title: "Graffity",
			filter: "inne",
			src: "./img/gallery/graffiti/011.jpg",
		},
	],
	hluboka: [
		{
			id: 1,
			class: "thumbnail first",
			title: "Zamek Hluboká",
			filter: "Europa",
			src: "/gallery/Zamek_Hluboká/001.jpg",
		},
		{
			id: 2,
			class: "thumbnail",
			title: "Zamek Hluboká",
			filter: "Europa",
			src: "./img/gallery/Zamek_Hluboká/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Zamek Hluboká",
			filter: "Europa",
			src: "./img/gallery/Zamek_Hluboká/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Zamek Hluboká",
			filter: "Europa",
			src: "./img/gallery/Zamek_Hluboká/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Zamek Hluboká",
			filter: "Europa",
			src: "./img/gallery/Zamek_Hluboká/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Zamek Hluboká",
			filter: "Europa",
			src: "./img/gallery/Zamek_Hluboká/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Zamek Hluboká",
			filter: "Europa",
			src: "./img/gallery/Zamek_Hluboká/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Zamek Hluboká",
			filter: "Europa",
			src: "./img/gallery/Zamek_Hluboká/008.jpg",
		},
	],
	sopot23: [
		{
			id: 1,
			class: "thumbnail first",
			title: "Sopot",
			filter: "Polska",
			src: "/gallery/Sopot2023/001.jpg",
		},
		{
			id: 2,
			class: "thumbnail",
			title: "Sopot",
			filter: "Polska",
			src: "./img/gallery/Sopot2023/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Sopot",
			filter: "Polska",
			src: "./img/gallery/Sopot2023/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Sopot",
			filter: "Polska",
			src: "./img/gallery/Sopot2023/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Sopot",
			filter: "Polska",
			src: "./img/gallery/Sopot2023/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Sopot",
			filter: "Polska",
			src: "./img/gallery/Sopot2023/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Sopot",
			filter: "Polska",
			src: "./img/gallery/Sopot2023/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Sopot",
			filter: "Polska",
			src: "./img/gallery/Sopot2023/008.jpg",
		},
	],
	slowacja22: [
		{
			id: 1,
			class: "thumbnail first",
			title: "Słowacja 2022",
			filter: "Polska",
			src: "/gallery/Slowacja2022/001.jpg",
		},
		{
			id: 2,
			class: "thumbnail",
			title: "Słowacja 2022",
			filter: "Polska",
			src: "./img/gallery/Slowacja2022/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Słowacja 2022",
			filter: "Polska",
			src: "./img/gallery/Slowacja2022/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Słowacja 2022",
			filter: "Polska",
			src: "./img/gallery/Slowacja2022/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Słowacja 2022",
			filter: "Polska",
			src: "./img/gallery/Slowacja2022/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Słowacja 2022",
			filter: "Polska",
			src: "./img/gallery/Slowacja2022/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Słowacja 2022",
			filter: "Polska",
			src: "./img/gallery/Slowacja2022/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Słowacja 2022",
			filter: "Polska",
			src: "./img/gallery/Slowacja2022/008.jpg",
		},
		{
			id: 9,
			class: "thumbnail",
			title: "Słowacja 2022",
			filter: "Polska",
			src: "./img/gallery/Slowacja2022/009.jpg",
		},
		{
			id: 10,
			class: "thumbnail",
			title: "Słowacja 2022",
			filter: "Polska",
			src: "./img/gallery/Slowacja2022/010.jpg",
		},
		{
			id: 11,
			class: "thumbnail",
			title: "Słowacja 2022",
			filter: "Polska",
			src: "./img/gallery/Slowacja2022/011.jpg",
		},
		{
			id: 12,
			class: "thumbnail",
			title: "Słowacja 2022",
			filter: "Polska",
			src: "./img/gallery/Slowacja2022/012.jpg",
		},
	],
	slowacja23: [
		{
			id: 1,
			class: "thumbnail first",
			title: "Słowacja 2023",
			filter: "Polska",
			src: "/gallery/Slowacja2023/001.jpg",
		},
		{
			id: 2,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			src: "./img/gallery/Slowacja2023/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			src: "./img/gallery/Slowacja2023/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			src: "./img/gallery/Slowacja2023/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			src: "./img/gallery/Slowacja2023/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			src: "./img/gallery/Slowacja2023/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			src: "./img/gallery/Slowacja2023/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			src: "./img/gallery/Slowacja2023/008.jpg",
		},
		{
			id: 9,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			src: "./img/gallery/Slowacja2023/009.jpg",
		},
		{
			id: 10,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			src: "./img/gallery/Slowacja2023/010.jpg",
		},
	],
};

const firstIdsByAlbum: { [album: string]: Photo } = {};
Object.keys(allAlbumPhotos).forEach((album) => {
	const firstPhoto = allAlbumPhotos[album][0];
	if (firstPhoto) {
		firstIdsByAlbum[album] = firstPhoto;
	}
});

export default function Albums() {
	return (
		<main>
			<Navbar />
			<h1 className="text-center text-4xl pt-32 pb-20 ">Galeria Zdjęć</h1>
			<div className="max-w-7xl grid gap-10 grid-cols-album m-auto px-5">
				{Object.keys(firstIdsByAlbum).map((album) => (
					<AlbumItem key={album} albumCover={firstIdsByAlbum[album]} />
				))}
			</div>

			<Footer />
		</main>
	);
}
