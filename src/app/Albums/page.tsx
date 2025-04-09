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
import {
	fetchAlbumPhotosFromCloudinary,
	fetchAlbumMetadataFromCloudinary,
	AlbumMetadata,
	PhotoType,
} from "../utils/cloudinary";
import AlbumsLoading from "./components/AlbumsLoading";

export default function Albums() {
	const [tag, setTag] = useState("Wszystkie");
	const [open, setOpen] = useState(false);
	const [currentAlbumPhotos, setCurrentAlbumPhotos] = useState<PhotoType[]>([]);

	const [albumsMetadata, setAlbumsMetadata] = useState<AlbumMetadata[]>([]);

	useEffect(() => {
		let isMounted = true;

		async function fetchAlbums() {
			const res = await fetch("/api/getFolders");
			const folders = await res.json();

			const metadata: AlbumMetadata[] = await Promise.all(
				folders.map(async (folder: { name: string; path: string }) => {
					const folderName = folder.name;
					const res = await fetch(
						`/api/getPhotos/${folderName}?coverOnly=true`
					);
					const photos = await res.json();
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

			if (isMounted) {
				setAlbumsMetadata(
					metadata
						.filter((album) => album.coverUrl)
						.sort(
							(a, b) =>
								new Date(b.created_at).getTime() -
								new Date(a.created_at).getTime()
						)
				);
			}
		}

		fetchAlbums();
		return () => {
			isMounted = false;
		};
	}, []);

	const uniqueTags = Array.from(
		new Set(albumsMetadata.flatMap((album) => album.tags))
	);

	const sortedTags = [
		"Wszystkie",
		"Europa",
		"Polska",
		...uniqueTags.filter(
			(tag) => !["Wszystkie", "Europa", "Polska"].includes(tag)
		),
	];

	const filteredAlbums = albumsMetadata.filter(
		(album) => tag === "Wszystkie" || album.tags.includes(tag)
	);

	const handleTagChange = (newTag: string) => {
		setTag(newTag);
	};

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	const handleAlbumClick = async (folder: string) => {
		const res = await fetch(`/api/getPhotos/${folder}`);
		const photos: PhotoType[] = await res.json();
		setCurrentAlbumPhotos(photos);
		setOpen(true);
	};

	return (
		<main ref={ref} className="mt-28 pb-12">
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
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
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
			{albumsMetadata.length === 0 ? (
				<AlbumsLoading />
			) : (
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
								src={album.coverUrl}
								tags={album.tags}
								onClick={() => handleAlbumClick(album.folder)}
							/>
						</motion.li>
					))}
				</ul>
			)}
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
