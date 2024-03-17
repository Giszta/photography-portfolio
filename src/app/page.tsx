import HomePhotoSlide from "./HomePage/HomePhotoSlide";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
	return (
		<main>
			<Navbar />
			<HomePhotoSlide />
			<Footer />
		</main>
	);
}
