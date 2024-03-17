"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PhotoSlice from "../assets/HomeSlide/005.jpg";
import HomeSlidePhotos from "./HomeSlide.json";

export default function HomePhotoSlide() {
	// const [photo, setPhoto] = useState(null);

	// useEffect(() => {
	// 	const random = Math.floor(Math.random() * HomeSlidePhotos.length);
	// 	const selectedPhoto = HomeSlidePhotos[random];
	// 	setPhoto(selectedPhoto);
	// }, []);

	// if (!photo) {
	// 	return null;
	// }

	return (
		<div className="photo-slide block absolute overflow-hidden -z-50 inset-0">
			<Image
				className="h-screen w-screen object-cover animate-fade animate-duration-1000 animate-ease-in"
				src={PhotoSlice}
				width={5000}
				height={5000}
				alt="Home page slide"
				priority
			/>
		</div>
	);
}
