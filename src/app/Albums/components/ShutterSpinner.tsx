"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import shutterAnimation from "./shutter.json"; // upewnij się, że ścieżka jest poprawna

const ShutterSpinner: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [flash, setFlash] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
			setFlash(true);
			setTimeout(() => setFlash(false), 300);
		}, 4000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
			{loading ? (
				<>
					<Lottie
						animationData={shutterAnimation}
						loop={true}
						className="w-40 h-40"
						style={{ filter: "invert(1)" }}
					/>
					<p className=" font-medium tracking-wide mt-6 text-sm italic text-gray-500">
						Trwa ładowanie...
					</p>
				</>
			) : (
				<div className="text-white text-xl">Gotowe!</div>
			)}
			{flash && (
				<div className="absolute inset-0 bg-white animate-flash z-50" />
			)}
		</div>
	);
};

export default ShutterSpinner;
