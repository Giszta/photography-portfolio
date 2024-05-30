import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NavbarMobile from "../components/Navbar/Navbar-mobile";
import AboutMePhoto from "../assets/AboutMe/about me.jpg";

export default function AboutMe() {
	return (
		<main className="">
			<Navbar />
			<NavbarMobile />
			<h1 className="text-center text-4xl pt-32 pb-10"> O Mnie </h1>
			<div className="flex justify-center items-center gap-x-20 gap-y-5 max-w-7xl m-auto mb-5 flex-wrap ">
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
						Moja przygoda z fotografią zaczęła się od [krótka historia o tym,
						jak zaczęła się Twoja przygoda z fotografią], a od tamtego czasu
						każda podróż jest dla mnie okazją do rozwijania mojej pasji i
						umiejętności. Fotografia pozwala mi dzielić się z innymi wyjątkowymi
						chwilami i miejscami, które miałem szczęście odwiedzić.
					</p>
				</span>
				<Image
					className="max-w-md w-11/12 rounded-3xl mx-5"
					src={AboutMePhoto}
					alt="About me photo"
					priority
				/>
			</div>
			<div className="flex justify-center items-center gap-x-20 gap-y-5 max-w-7xl m-auto mb-5 flex-wrap ">
				<Image
					className="max-w-md w-11/12 rounded-3xl mx-5"
					src={AboutMePhoto}
					alt="About me photo"
					priority
				/>
				<span className="max-w-2xl text-justify mx-5 block indent-0.5">
					<p className="indent-5">
						Podczas moich podróży zawsze staram się znaleźć nowe perspektywy i
						odkrywać mniej znane zakątki świata. Moje zdjęcia są wynikiem
						cierpliwości, uwagi na detale i miłości do odkrywania nieznanego.
						Każde zdjęcie to dla mnie osobista historia i wspomnienie, które
						chcę przekazać innym. Kiedy nie podróżuję, zajmuję się [krótkie
						informacje o Twoich zainteresowaniach lub zawodzie], co również
						wpływa na moje podejście do fotografii – jestem otwarty na nowe
						doświadczenia i pomysły.
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
					<p className="signature">Roman Giszter</p>
					<br />
				</span>
			</div>
			<Footer />
		</main>
	);
}
