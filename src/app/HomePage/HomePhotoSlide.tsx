"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchPhotosByFolder } from "../utils/cloudinary";

import ShutterSpinner from "../Albums/components/ShutterSpinner";

const LAST_PHOTOS_KEY = "lastHomeSlidePhotos";
const HISTORY_SIZE = 5;

const ID2_MATCHING_PHOTOS = [
	"https://res.cloudinary.com/giszta/image/upload/v1743109807/HomeSlide/landscape/wrzesien00026_qyjcqe.jpg",
	"https://res.cloudinary.com/giszta/image/upload/v1738619920/HomeSlide/portrait/pion003_aejcbu.jpg",
];

interface HomePhotoSlideProps {
	onPhotoSelected?: (photoUrl: string, quoteId?: number) => void;
	onReady?: () => void;
}

export default function HomePhotoSlide({
	onPhotoSelected,
	onReady,
}: HomePhotoSlideProps) {
	const [isPortrait, setIsPortrait] = useState<boolean | null>(null);
	const [chosenPhoto, setChosenPhoto] = useState<string | null>(null);
	const [visiblePhoto, setVisiblePhoto] = useState<string | null>(null);
	const [isLocked, setIsLocked] = useState(false);

	// Ustal orientację
	useEffect(() => {
		const mediaQuery = window.matchMedia("(orientation: portrait)");
		const updateOrientation = () => setIsPortrait(mediaQuery.matches);
		updateOrientation();

		mediaQuery.addEventListener("change", updateOrientation);
		return () => mediaQuery.removeEventListener("change", updateOrientation);
	}, []);

	// Pobierz zdjęcie tylko raz
	useEffect(() => {
		if (isPortrait === null || isLocked || chosenPhoto) return;

		const loadPhoto = async () => {
			const folder = isPortrait ? "HomeSlide/portrait" : "HomeSlide/landscape";
			const photos = await fetchPhotosByFolder(folder);

			const lastPhotos = getLastPhotos();
			const filtered = photos.filter(
				(p: { url: string }) => !lastPhotos.includes(p.url)
			);
			const candidates = filtered.length > 0 ? filtered : photos;

			const randomIndex = Math.floor(Math.random() * candidates.length);
			const selected = candidates[randomIndex].url;

			saveToLastPhotos(selected);

			if (ID2_MATCHING_PHOTOS.includes(selected)) {
				setIsLocked(true);
				onPhotoSelected?.(selected, 2);
			} else {
				onPhotoSelected?.(selected);
			}

			setChosenPhoto(selected); // dopiero teraz ustawiamy
		};

		loadPhoto();
	}, [isPortrait, isLocked, chosenPhoto, onPhotoSelected]);

	// Po załadowaniu zdjęcia - pokazujemy
	const handleImageLoad = () => {
		if (chosenPhoto) {
			setVisiblePhoto(chosenPhoto);
			onReady?.();
		}
	};

	useEffect(() => {
		document.body.classList.add("no-scroll");
		return () => document.body.classList.remove("no-scroll");
	}, []);
	const isLoading = !visiblePhoto;

	return (
		<div className="photo-slide fixed top-0 left-0 w-full h-full overflow-hidden -z-50 inset-0">
			{isLoading && (
				<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 z-10">
					<ShutterSpinner />
				</div>
			)}
			{chosenPhoto && (
				<Image
					className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
						visiblePhoto ? "opacity-100" : "opacity-0"
					}`}
					src={chosenPhoto}
					fill
					alt="Home page slide"
					priority
					onLoad={handleImageLoad}
				/>
			)}
		</div>
	);
}

function getLastPhotos(): string[] {
	if (typeof window === "undefined") return [];
	try {
		const stored = localStorage.getItem(LAST_PHOTOS_KEY);
		return stored ? JSON.parse(stored) : [];
	} catch {
		return [];
	}
}

function saveToLastPhotos(url: string) {
	if (typeof window === "undefined") return;
	try {
		const prev = getLastPhotos();
		const updated = [url, ...prev.filter((item) => item !== url)].slice(
			0,
			HISTORY_SIZE
		);
		localStorage.setItem(LAST_PHOTOS_KEY, JSON.stringify(updated));
	} catch {}
}
