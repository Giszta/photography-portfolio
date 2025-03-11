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
		<main className="mt-28 pb-4">
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
				className="flex justify-center items-center gap-x-20 gap-y-5 max-w-7xl m-auto mb-5 flex-wrap "
			>
				<span className="max-w-2xl text-justify mx-5 block indent-0.5 order-2 xl:order-1">
					<p className="indent-5">
						Cześć! Nazywam się Romek, a fotografia turystyczna to moja wielka
						pasja. Od wielu lat podróżuję z aparatem w ręku, uwieczniając
						niezwykłe miejsca, różnorodne krajobrazy i autentyczne chwile z
						moich wypraw. Podczas moich podróży staram się uchwycić nie tylko
						piękno odwiedzanych miejsc, ale także ducha kultury i życia
						codziennego ich mieszkańców.
					</p>
					<br />
					<p className="indent-5">
						Przygoda z fotografią rozpoczęła się wiele lat temu, a od tamtego
						czasu każda podróż staje się okazją do rozwijania pasji i
						umiejętności. Fotografia pozwala odkrywać nowe perspektywy i
						odkrywać mniej znane zakątki świata. Zdjęcia są wynikiem
						cierpliwości, uwagi na detale i miłości do odkrywania nieznanego.
						Każde zdjęcie to osobista historia i wspomnienie, które chcę
						przekazać innym.Podczas podróży zawsze staram się znaleźć nowe
						perspektywy i odkrywać mniej znane zakątki świata. Każde zdjęcie to
						dla mnie osobista historia i wspomnienie, które chcę przekazać
						innym.
					</p>
				</span>
				{photos.length > 0 && (
					<Image
						className="max-w-md w-11/12 rounded-3xl mx-5 order-1 xl:order-2"
						src={photos[0].url}
						alt="About me photo"
						width={photos[0].width || 300}
						height={photos[0].height || 300}
						priority
					/>
				)}
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1, duration: 0.5 }}
				className="flex justify-center items-center gap-x-20 gap-y-5 max-w-7xl m-auto mb-5 flex-wrap "
			>
				{photos.length > 0 && (
					<Image
						className="max-w-md w-11/12 rounded-3xl mx-5 order-3"
						src={photos[1].url}
						alt="About me photo"
						width={photos[1].width || 300}
						height={photos[1].height || 300}
						priority
					/>
				)}
				<span className="max-w-2xl text-justify mx-5 block indent-0.5 order-4">
					<p className="indent-5">
						Kiedy nie podróżuję, zajmuję się jazdą na rowerze i dartem. Jazda na
						rowerze pozwala mi na eksplorowanie okolicy w spokojnym tempie,
						odkrywanie urokliwych miejsc i czerpanie radości z aktywnego
						spędzania czasu na świeżym powietrzu. Z kolei gra w darta to dla
						mnie sposób na relaks, ćwiczenie precyzji i rywalizację w gronie
						przyjaciół. Te zainteresowania wpływają na moje podejście do
						fotografii – otwartość na nowe doświadczenia i pomysły, a także
						dążenie do perfekcji w każdym ujęciu.
					</p>
					<br />
					<p className="indent-5">
						Zapraszam Cię do obejrzenia mojej galerii, gdzie znajdziesz
						fotografie z różnych zakątków świata. Mam nadzieję, że moje zdjęcia
						zainspirują Cię do własnych podróży i odkrywania piękna świata.
						<br />
						<br />
						Pozdrawiam,
					</p>
					<p className="signature">Romek</p>
					<br />
				</span>
			</motion.div>
			<Footer />
		</main>
	);
}
