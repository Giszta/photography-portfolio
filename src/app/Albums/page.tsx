"use client";
import React, { useRef, useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AlbumItem from "./components/AlbumItem";
import AlbumFilterButton from "./components/AlbumFilterButton";
import { motion, useInView } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import {
	Counter,
	Fullscreen,
	Slideshow,
	Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { fetchAlbumPhotosFromCloudinary } from "../utils/cloudinary";
import { PhotoType } from "../utils/cloudinary";

export default function Albums() {
	const [tag, setTag] = useState("Wszystkie");
	const [open, setOpen] = useState(false);
	const [currentAlbumPhotos, setCurrentAlbumPhotos] = useState<PhotoType[]>([]);
	const [allAlbumPhotos, setAllAlbumPhotos] = useState<PhotoType[][]>([]);
	const [albumCover, setAlbumCover] = useState<PhotoType[]>([]);

	useEffect(() => {
		let isMounted = true;

		async function getAlbums() {
			const albums = await fetchAlbumPhotosFromCloudinary();
			const sortedAlbums = albums
				.filter((album) => album.length > 0 && album[0].tags.length > 0)
				.sort((a, b) => {
					const dateA = new Date(a[0].created_at);
					const dateB = new Date(b[0].created_at);
					return dateB.getTime() - dateA.getTime();
				});

			if (isMounted) {
				setAllAlbumPhotos(sortedAlbums);
				const covers = sortedAlbums.map((album) => album[0]);
				setAlbumCover(covers);
			}
		}
		getAlbums();
		return () => {
			isMounted = false;
		};
	}, []);

	const filteredAlbums = albumCover.filter(
		(album) => tag === "Wszystkie" || album.tags.includes(tag)
	);

	const handleTagChange = (newTag: string) => {
		setTag(newTag);
	};

	const arrayOfTags = albumCover.map((album) => album.tags);
	const arrayOfUniqueTags = Array.from(new Set(arrayOfTags.flat()));
	const sortedTags = [
		"Wszystkie",
		"Europa",
		"Polska",
		...arrayOfUniqueTags.filter(
			(tag) =>
				tag !== "Wszystkie" &&
				tag !== "Europa" &&
				tag !== "Polska" &&
				tag !== "Inne"
		),
		"Inne",
	];

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	const handleAlbumClick = (albumPhotos: PhotoType[]) => {
		setCurrentAlbumPhotos(albumPhotos);
		setOpen(true);
	};

	return (
		<main ref={ref} className="mt-28">
			<Navbar />
			<motion.h1
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="text-center text-4xl pb-10 font-serif"
			>
				Galeria Zdjęć
			</motion.h1>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="flex justify-center gap-4 text-white pb-10"
			>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{sortedTags.map((buttonTag) => (
						<AlbumFilterButton
							key={buttonTag}
							name={buttonTag}
							onClick={() => handleTagChange(buttonTag)}
							isSelected={tag === buttonTag}
						/>
					))}
				</div>
			</motion.div>
			<ul
				key={tag}
				className="max-w-7xl grid gap-10 grid-cols-album m-auto pl-2 pr-2"
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
							src={album.url}
							tags={album.tags}
							onClick={() => handleAlbumClick(allAlbumPhotos[index])}
						/>
					</motion.li>
				))}
			</ul>
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={currentAlbumPhotos.map((photo) => ({ src: photo.url }))}
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
