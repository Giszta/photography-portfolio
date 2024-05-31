"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const landscapePhotos = [
	"/HomeSlide/landscape/001.jpg",
	"/HomeSlide/landscape/002.jpg",
	"/HomeSlide/landscape/003.jpg",
];

const portraitPhotos = [
	"/HomeSlide/portrait/001.jpg",
	"/HomeSlide/portrait/002.jpg",
	"/HomeSlide/portrait/003.jpg",
];

function getRandomPhoto(photoList: string[]) {
	const randomIndex = Math.floor(Math.random() * photoList.length);
	return photoList[randomIndex];
}

export default function HomePhotoSlide() {
	const [randomPhotoSrc, setRandomPhotoSrc] = useState("");
	const [isPortrait, setIsPortrait] = useState(
		window.matchMedia("(orientation: portrait)").matches
	);

	useEffect(() => {
		function updateOrientation() {
			const currentIsPortrait = window.matchMedia(
				"(orientation: portrait)"
			).matches;
			if (currentIsPortrait !== isPortrait) {
				const photoList = currentIsPortrait ? portraitPhotos : landscapePhotos;
				setRandomPhotoSrc(getRandomPhoto(photoList));
				setIsPortrait(currentIsPortrait);
			}
		}

		// Initial photo set
		const initialPhotoList = isPortrait ? portraitPhotos : landscapePhotos;
		setRandomPhotoSrc(getRandomPhoto(initialPhotoList));

		window.addEventListener("resize", updateOrientation);

		// Cleanup listener on component unmount
		return () => {
			window.removeEventListener("resize", updateOrientation);
		};
	}, [isPortrait]);

	return (
		<div className="photo-slide block absolute overflow-hidden -z-50 inset-0">
			{randomPhotoSrc && (
				<Image
					className="h-screen w-screen object-cover animate-fade animate-duration-1000 animate-ease-in"
					src={randomPhotoSrc}
					width={5000}
					height={5000}
					alt="Home page slide"
					priority
				/>
			)}
		</div>
	);
}
