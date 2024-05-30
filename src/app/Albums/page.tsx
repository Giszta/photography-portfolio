"use client";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AlbumItem from "./components/AlbumItem";
import AlbumFilterButton from "./components/AlbumFilterButton";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
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
			src: "/gallery/Graffiti/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "/gallery/Graffiti/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "/gallery/Graffiti/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "/gallery/Graffiti/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "/gallery/Graffiti/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "/gallery/Graffiti/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "/gallery/Graffiti/008.jpg",
		},
		{
			id: 9,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "/gallery/Graffiti/009.jpg",
		},
		{
			id: 10,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "/gallery/Graffiti/010.jpg",
		},
		{
			id: 11,
			class: "thumbnail",
			title: "Graffity",
			tag: ["Wszystkie", "Inne"],
			src: "/gallery/Graffiti/011.jpg",
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
			src: "/gallery/Zamek_Hluboká/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Zamek_Hluboká/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Zamek_Hluboká/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Zamek_Hluboká/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Zamek_Hluboká/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Zamek_Hluboká/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Zamek Hluboká",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Zamek_Hluboká/008.jpg",
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
			src: "/gallery/Sopot2023/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "/gallery/Sopot2023/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "/gallery/Sopot2023/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "/gallery/Sopot2023/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "/gallery/Sopot2023/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "/gallery/Sopot2023/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Sopot",
			tag: ["Wszystkie", "Polska"],
			src: "/gallery/Sopot2023/008.jpg",
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
			src: "/gallery/Slowacja2022/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2022/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2022/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2022/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2022/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2022/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2022/008.jpg",
		},
		{
			id: 9,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2022/009.jpg",
		},
		{
			id: 10,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2022/010.jpg",
		},
		{
			id: 11,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2022/011.jpg",
		},
		{
			id: 12,
			class: "thumbnail",
			title: "Słowacja 2022",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2022/012.jpg",
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
			src: "/gallery/Slowacja2023/002.jpg",
		},
		{
			id: 3,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2023/003.jpg",
		},
		{
			id: 4,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2023/004.jpg",
		},
		{
			id: 5,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2023/005.jpg",
		},
		{
			id: 6,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2023/006.jpg",
		},
		{
			id: 7,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2023/007.jpg",
		},
		{
			id: 8,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2023/008.jpg",
		},
		{
			id: 9,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2023/009.jpg",
		},
		{
			id: 10,
			class: "thumbnail",
			title: "Słowacja 2023",
			filter: "Polska",
			tag: ["Wszystkie", "Europa"],
			src: "/gallery/Slowacja2023/010.jpg",
		},
	],
];

export default function Albums() {
	const [tag, setTag] = useState("Wszystkie");
	const [open, setOpen] = useState(false);
	const [currentAlbumPhotos, setCurrentAlbumPhotos] = useState([]);

	const albumCover = allAlbumPhotos.map((album) => album[0]);

	const filteredAlbums = albumCover.filter(
		(album) => tag === "Wszystkie" || album.tag.includes(tag)
	);

	const handleTagChange = (newTag: string) => {
		setTag(newTag);
	};

	const arrayOfTags = albumCover.map((album) => album.tag);
	const arrayOfUniqueTags = Array.from(new Set(arrayOfTags.flat()));

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	const handleAlbumClick = (albumPhotos) => {
		setCurrentAlbumPhotos(albumPhotos);
		setOpen(true);
	};

	return (
		<main ref={ref}>
			<Navbar />
			<motion.h1
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="text-center text-4xl pt-32 pb-5 "
			>
				Galeria Zdjęć
			</motion.h1>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="flex flex-row justify-center items-center gap-2 text-white my-6 pb-10"
			>
				{arrayOfUniqueTags.map((buttonTag) => (
					<AlbumFilterButton
						key={buttonTag}
						name={buttonTag}
						onClick={() => handleTagChange(buttonTag)}
						isSelected={tag === buttonTag}
					/>
				))}
			</motion.div>
			<ul
				key={tag}
				className="max-w-7xl grid gap-10 grid-cols-album m-auto px-5"
			>
				{filteredAlbums.map((album, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<AlbumItem
							key={album.title}
							title={album.title}
							src={album.src}
							tag={album.tag}
							onClick={() => handleAlbumClick(allAlbumPhotos[index])}
						/>
					</motion.li>
				))}
			</ul>
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={currentAlbumPhotos.map((photo) => ({ src: photo.src }))}
				plugins={[Counter, Fullscreen, Slideshow, Thumbnails]}
				counter={{ container: { style: { top: "unset", bottom: 0 } } }}
				thumbnails={{
					showToggle: true,
				}}
			/>
			<Footer />
		</main>
	);
}
