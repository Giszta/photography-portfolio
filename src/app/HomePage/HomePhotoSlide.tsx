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

	useEffect(() => {
		function updatePhoto() {
			const isPortrait = window.matchMedia("(orientation: portrait)").matches;
			const photoList = isPortrait ? portraitPhotos : landscapePhotos;
			setRandomPhotoSrc(getRandomPhoto(photoList));
		}

		updatePhoto();
		window.addEventListener("resize", updatePhoto);

		// Cleanup listener on component unmount
		return () => {
			window.removeEventListener("resize", updatePhoto);
		};
	}, []);

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
