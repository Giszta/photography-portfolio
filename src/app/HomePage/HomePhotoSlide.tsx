"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchPhotosByFolder } from "../utils/cloudinary";

export default function HomePhotoSlide() {
	const [randomPhotoSrc, setRandomPhotoSrc] = useState("");
	const [isPortrait, setIsPortrait] = useState<boolean | null>(null);

	useEffect(() => {
		const currentIsPortrait = window.matchMedia(
			"(orientation: portrait)"
		).matches;
		setIsPortrait(currentIsPortrait);

		function updateOrientation() {
			const newIsPortrait = window.matchMedia(
				"(orientation: portrait)"
			).matches;
			if (newIsPortrait !== isPortrait) {
				setIsPortrait(newIsPortrait);
			}
		}

		window.addEventListener("resize", updateOrientation);

		return () => {
			window.removeEventListener("resize", updateOrientation);
		};
	}, [isPortrait]);

	useEffect(() => {
		if (isPortrait === null) return;

		async function loadPhotos() {
			const folder = isPortrait ? "HomeSlide/portrait" : "HomeSlide/landscape";
			const photos = await fetchPhotosByFolder(folder);
			if (photos.length > 0) {
				setRandomPhotoSrc(getRandomPhoto(photos));
			}
		}

		function getRandomPhoto(photoList: { src: string }[]) {
			const randomIndex = Math.floor(Math.random() * photoList.length);
			return photoList[randomIndex].src;
		}

		loadPhotos();
	}, [isPortrait]);
	return (
		<div className="photo-slide block absolute overflow-hidden -z-50 inset-0">
			{randomPhotoSrc && (
				<Image
					className="h-screen w-screen object-cover animate-fade animate-duration-1000 animate-ease-in"
					src={randomPhotoSrc}
					fill
					alt="Home page slide"
					priority
				/>
			)}
		</div>
	);
}
