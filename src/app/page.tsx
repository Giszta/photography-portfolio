"use client";
import { useState, useEffect } from "react";
import Circles from "./HomePage/Circles";
import HomePhotoSlide from "./HomePage/HomePhotoSlide";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
	const [selectedQuoteId, setSelectedQuoteId] = useState<number | undefined>();
	const [isPhotoReady, setIsPhotoReady] = useState(false);
	const [circlesVisible, setCirclesVisible] = useState(false);

	useEffect(() => {
		if (isPhotoReady) {
			const timer = setTimeout(() => setCirclesVisible(true), 100);
			return () => clearTimeout(timer);
		} else {
			setCirclesVisible(false);
		}
	}, [isPhotoReady]);

	return (
		<main className="hide-scrollbar">
			<Navbar />
			<HomePhotoSlide
				onPhotoSelected={(photoUrl, quoteId) => setSelectedQuoteId(quoteId)}
				onReady={() => setIsPhotoReady(true)}
			/>
			{circlesVisible && <Circles fixedQuoteId={selectedQuoteId} />}
			<Footer />
		</main>
	);
}
