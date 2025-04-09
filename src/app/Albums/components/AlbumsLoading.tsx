"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AlbumsLoading() {
	const [flash, setFlash] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setFlash(true);
			setTimeout(() => setFlash(false), 150);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col items-center justify-center h-[360px]">
			<div className="relative w-40 h-32 bg-gray-800 rounded-md shadow-lg border-4 border-gray-700">
				{/* Główna obudowa aparatu */}
				<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-4 bg-gray-700 rounded-sm" />

				{/* Obiektyw */}
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<div className="relative w-20 h-20">
						<motion.div
							className="absolute inset-0 bg-black rounded-full border-4 border-gray-600"
							initial={{ scale: 0.95 }}
							animate={{ scale: [0.95, 1, 0.95] }}
							transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
						/>
						<motion.div
							className="absolute inset-3 rounded-full border-t-4 border-gray-400"
							initial={{ rotate: 0 }}
							animate={{ rotate: 360 }}
							transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
						/>

						{flash && (
							<div className="absolute inset-0 bg-white opacity-80 rounded-full z-20 pointer-events-none animate-fadeOut" />
						)}
					</div>
				</div>

				{/* Flash */}
				<div className="absolute top-1 right-2 w-4 h-2 bg-yellow-300 rounded-sm shadow-md" />
			</div>
			<p className="mt-6 text-sm italic text-gray-500">
				Wczytywanie albumów ze zdjęciami...
			</p>

			<style jsx>{`
				@keyframes fadeOut {
					0% {
						opacity: 0.8;
					}
					100% {
						opacity: 0;
					}
				}
				.animate-fadeOut {
					animation: fadeOut 0.3s ease-out forwards;
				}
			`}</style>
		</div>
	);
}
