"use client";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AboutMePhoto from "../assets/AboutMe/about me.jpg";
import { motion } from "framer-motion";
export default function AboutMe() {
	return (
		<main className="mt-28">
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
				<span className="max-w-2xl text-justify mx-5 block indent-0.5">
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
				<Image
					className="max-w-md w-11/12 rounded-3xl mx-5"
					src={AboutMePhoto}
					alt="About me photo"
					priority
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1, duration: 0.5 }}
				className="flex justify-center items-center gap-x-20 gap-y-5 max-w-7xl m-auto mb-5 flex-wrap "
			>
				<Image
					className="max-w-md w-11/12 rounded-3xl mx-5"
					src={AboutMePhoto}
					alt="About me photo"
					priority
				/>
				<span className="max-w-2xl text-justify mx-5 block indent-0.5">
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
