// components/HomePhotoSlide.tsx
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchPhotosByFolder } from "../utils/cloudinary";

export default function HomePhotoSlide() {
	const [randomPhotoSrc, setRandomPhotoSrc] = useState("");
	const [isPortrait, setIsPortrait] = useState<boolean | null>(null); // Zmieniamy na `null`, żeby początkowo nie ładować żadnych zdjęć

	// Sprawdzamy orientację tylko po stronie klienta
	useEffect(() => {
		const currentIsPortrait = window.matchMedia(
			"(orientation: portrait)"
		).matches;
		setIsPortrait(currentIsPortrait);

		// Funkcja do nasłuchiwania zmiany orientacji ekranu
		function updateOrientation() {
			const newIsPortrait = window.matchMedia(
				"(orientation: portrait)"
			).matches;
			if (newIsPortrait !== isPortrait) {
				setIsPortrait(newIsPortrait);
			}
		}

		window.addEventListener("resize", updateOrientation);

		// Cleanup listener on component unmount
		return () => {
			window.removeEventListener("resize", updateOrientation);
		};
	}, []);

	// Ładowanie zdjęć po zaktualizowaniu orientacji
	useEffect(() => {
		if (isPortrait === null) return; // Poczekaj, aż orientacja zostanie określona

		async function loadPhotos() {
			const folder = isPortrait ? "HomeSlide/portrait" : "HomeSlide/landscape";
			// console.log(`Fetching photos from folder: ${folder}`);
			const photos = await fetchPhotosByFolder(folder);
			if (photos.length > 0) {
				setRandomPhotoSrc(getRandomPhoto(photos));
			}
		}

		function getRandomPhoto(photoList: { src: string }[]) {
			const randomIndex = Math.floor(Math.random() * photoList.length);
			return photoList[randomIndex].src;
		}

		// Załaduj zdjęcia po ustawieniu orientacji
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
