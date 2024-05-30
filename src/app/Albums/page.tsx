"use client";
import { AlbumPhotos, Photo } from "@/types/Gallery_Types";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AlbumItem from "./components/AlbumItem";
import AlbumFilterButton from "./components/AlbumFilterButton";
import { useState } from "react";
const allAlbumPhotos = [
	[
		{
			id: 1,
			class: "thumbnail first",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "/gallery/Graffiti/001.jpg",
		},
		{
			id: 2,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "./img/gallery/graffiti/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "./img/gallery/graffiti/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "./img/gallery/graffiti/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "./img/gallery/graffiti/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "./img/gallery/graffiti/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "./img/gallery/graffiti/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "./img/gallery/graffiti/008.jpg",
		},
		{
			id: 9,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "./img/gallery/graffiti/009.jpg",
		},
		{
			id: 10,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "./img/gallery/graffiti/010.jpg",
		},
		{
			id: 11,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "./img/gallery/graffiti/011.jpg",
		},
	],
	[
		{
			id: 1,
			class: "thumbnail first",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Zamek_Hluboká/001.jpg",
		},
		{
			id: 2,
			class: "thumbnail",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Zamek_Hluboká/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Zamek_Hluboká/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Zamek_Hluboká/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Zamek_Hluboká/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Zamek_Hluboká/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Zamek_Hluboká/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Zamek_Hluboká/008.jpg",
		},
	],
	[
		{
			id: 1,
			class: "thumbnail first",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "/gallery/Sopot2023/001.jpg",
		},
		{
			id: 2,
			class: "thumbnail",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "./img/gallery/Sopot2023/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "./img/gallery/Sopot2023/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "./img/gallery/Sopot2023/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "./img/gallery/Sopot2023/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "./img/gallery/Sopot2023/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "./img/gallery/Sopot2023/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "./img/gallery/Sopot2023/008.jpg",
		},
	],
	[
		{
			id: 1,
			class: "thumbnail first",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2022/001.jpg",
		},
		{
			id: 2,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2022/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2022/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2022/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2022/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2022/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2022/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2022/008.jpg",
		},
		{
			id: 9,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2022/009.jpg",
		},
		{
			id: 10,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2022/010.jpg",
		},
		{
			id: 11,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2022/011.jpg",
		},
		{
			id: 12,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2022/012.jpg",
		},
	],
	[
		{
			id: 1,
			class: "thumbnail first",
			title: "Słowacja 2023",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2023/001.jpg",
		},
		{
			id: 2,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2023/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2023/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2023/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2023/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2023/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2023/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2023/008.jpg",
		},
		{
			id: 9,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2023/009.jpg",
		},
		{
			id: 10,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "./img/gallery/Slowacja2023/010.jpg",
		},
	],
];

export default function Albums() {
	const [tag, setTag] = useState("Wszystkie");

	const albumCover = allAlbumPhotos.map((album) => album[0]);

	const filteredAlbums = albumCover.filter((album) => album.tag.includes(tag));

	const handleTagChange = (newTag: string) => {
		setTag(newTag);
	};

	const arrayOfTags = albumCover.map((tag) => tag.tag);
	const arrayOfUniqueTags = Array.from(new Set(arrayOfTags.flat()));

	return (
		<main className="">
			<Navbar />
			<h1 className="text-center text-4xl pt-32 pb-5 ">Galeria Zdjęć</h1>
			<div className="flex flex-row justify-center items-center gap-2 text-white my-6 pb-10">
				{arrayOfUniqueTags.map((buttonTag) => (
					<AlbumFilterButton
						key={buttonTag}
						name={buttonTag}
						onClick={handleTagChange}
						isSelected={tag === buttonTag}
					/>
				))}
			</div>
			<div className="max-w-7xl grid gap-10 grid-cols-album m-auto px-5">
				{filteredAlbums.map((album) => (
					<AlbumItem
						key={album.title}
						title={album.title}
						src={album.src}
						tag={album.tag}
					/>
				))}
			</div>

			<Footer />
		</main>
	);
}
