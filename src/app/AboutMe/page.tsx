"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { fetchAboutMePhotosFromCloudinary } from "../utils/cloudinary";
import { motion } from "framer-motion";
import { PhotoType } from "../utils/cloudinary";

export default function AboutMe() {
	const [photos, setPhotos] = useState<PhotoType[]>([]);
	useEffect(() => {
		const fetchPhotos = async () => {
			const fetchedPhotos = await fetchAboutMePhotosFromCloudinary();
			setPhotos(fetchedPhotos);
		};
		fetchPhotos();
	}, []);

	return (
		<main className="pt-28 pb-2 md:pb-0">
			<Navbar />
			<motion.h1
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="text-center text-4xl pb-10"
			>
				{" "}
				O Mnie{" "}
			</motion.h1>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className="flex justify-center items-center gap-x-5 gap-y-5 max-w-7xl m-auto mb-5 flex-wrap "
			>
				{photos[0]?.url && (
					<Image
						className="max-w-md w-11/12 rounded-3xl mx-5 order-1 xl:order-2 shadow-2xl "
						src={photos[0].url}
						alt="About me photo"
						width={photos[0].width || 300}
						height={photos[0].height || 300}
						priority
					/>
				)}
				<div className="max-w-2xl text-justify mx-5 block indent-0.5 order-2 xl:order-1">
					<p className="indent-5">
						Cześć:). Na imię mam Romek i jestem pasjonatem fotografii,
						podróżowania oraz aktywnego trybu życia.
					</p>
					<br />
					<p className="indent-5">
						Od wielu lat podróżuję z aparatem w ręku, uwieczniając niezwykłe
						miejsca, różnorodne krajobrazy i chwile z moich wypraw. Przygoda z
						fotografią rozpoczęła się kilka lat temu. Od tamtego czasu, kolejna
						podróż staje się okazją do rozwijania pasji i umiejętności. Każde
						zdjęcie to dla mnie osobista historia i wspomnienie, którem chcę
						podzielić się z innymi.
					</p>
					<br />
					<p className="indent-5">
						Kiedy nie podróżuję, relaksuję się jazdą na rowerze i grą w darta.
						Jazda na dwóch kółkach, to dla mnie idealny sposób na połączenie
						pasji do przyrody z aktywnością fizyczną. Uwielbiam odkrywać
						malownicze trasy i cieszyć się świeżym powietrzem. Z kolei gra w
						darta, to sposób na relaks, ćwiczenie precyzji i rywalizację w
						gronie przyjaciół.
					</p>
					<br />
					<p className="indent-5">
						Zapraszam do świata moich fotografii oraz wspólnych podróży! Mam
						nadzieję, że zainspiruję Cię do odkrywania piękna, które kryje się
						wokół nas.
						<br />
						<br />
						Pozdrawiam,
					</p>
					<p className="signature">Romek</p>
					<br />
				</div>
			</motion.div>
			<Footer />
		</main>
	);
}
