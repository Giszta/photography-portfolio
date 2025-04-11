"use client";
import { useState } from "react";
import Circles from "./HomePage/Circles";
import HomePhotoSlide from "./HomePage/HomePhotoSlide";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
	const [selectedQuoteId, setSelectedQuoteId] = useState<number | undefined>();
	return (
		<main className="hide-scrollbar">
			<Navbar />
			<HomePhotoSlide
				onPhotoSelected={(photoUrl, quoteId) => setSelectedQuoteId(quoteId)}
			/>
			<Circles fixedQuoteId={selectedQuoteId} />
			<Footer />
		</main>
	);
}
