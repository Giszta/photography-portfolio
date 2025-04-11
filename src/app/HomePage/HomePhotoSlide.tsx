"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchPhotosByFolder } from "../utils/cloudinary";

const LAST_PHOTOS_KEY = "lastHomeSlidePhotos";
const HISTORY_SIZE = 5;

const ID2_MATCHING_PHOTOS = [
	"https://res.cloudinary.com/giszta/image/upload/v1743109807/HomeSlide/landscape/wrzesien00026_qyjcqe.jpg",
	"https://res.cloudinary.com/giszta/image/upload/v1738619920/HomeSlide/portrait/pion003_aejcbu.jpg",
];

interface HomePhotoSlideProps {
	onPhotoSelected?: (photoUrl: string, quoteId?: number) => void;
}

export default function HomePhotoSlide({
	onPhotoSelected,
}: HomePhotoSlideProps) {
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
		return () => window.removeEventListener("resize", updateOrientation);
	}, [isPortrait]);

	useEffect(() => {
		if (isPortrait === null) return;

		async function loadPhotos() {
			const folder = isPortrait ? "HomeSlide/portrait" : "HomeSlide/landscape";
			const photos = await fetchPhotosByFolder(folder);
			if (photos.length > 0) {
				const lastPhotos = getLastPhotos();
				const filtered = photos.filter(
					(p: { url: string }) => !lastPhotos.includes(p.url)
				);
				const candidates = filtered.length > 0 ? filtered : photos;

				const randomIndex = Math.floor(Math.random() * candidates.length);
				const chosenPhoto = candidates[randomIndex].url;

				setRandomPhotoSrc(chosenPhoto);
				saveToLastPhotos(chosenPhoto);

				const fixedQuoteId = ID2_MATCHING_PHOTOS.includes(chosenPhoto)
					? 2
					: undefined;
				onPhotoSelected?.(chosenPhoto, fixedQuoteId);
			}
		}

		loadPhotos();
	}, [isPortrait, onPhotoSelected]);

	useEffect(() => {
		document.body.classList.add("no-scroll");
		return () => document.body.classList.remove("no-scroll");
	}, []);

	return (
		<div className="photo-slide fixed top-0 left-0 w-full h-full overflow-hidden -z-50 inset-0">
			{randomPhotoSrc && (
				<Image
					className="absolute top-0 left-0 w-full h-full object-cover animate-fade animate-duration-500 animate-ease-in"
					src={randomPhotoSrc}
					fill
					alt="Home page slide"
					priority
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
