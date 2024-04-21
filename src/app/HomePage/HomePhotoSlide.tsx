"use client";
import Image from "next/image";
import React from "react";

const photoList = [
	"/HomeSlide/001.jpg",
	"/HomeSlide/002.jpg",
	"/HomeSlide/003.jpg",
	"/HomeSlide/004.jpg",
	"/HomeSlide/005.jpg",
];
function getRandomPhoto() {
	const randomIndex = Math.floor(Math.random() * photoList.length);
	return photoList[randomIndex];
}

export default function HomePhotoSlide() {
	const randomPhotoSrc = getRandomPhoto();

	return (
		<div className="photo-slide block absolute overflow-hidden -z-50 inset-0">
			<Image
				className="h-screen w-screen object-cover animate-fade animate-duration-1000 animate-ease-in"
				src={randomPhotoSrc}
				width={5000}
				height={5000}
				alt="Home page slide"
				priority
			/>
		</div>
	);
}
