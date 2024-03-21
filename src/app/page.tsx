import Circles from "./HomePage/Circles";
import HomePhotoSlide from "./HomePage/HomePhotoSlide";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/Navbar/Navbar-mobile";

export default function Home() {
	return (
		<main>
			<Navbar />
			<NavbarMobile />
			<HomePhotoSlide />
			<Circles />
			<Footer />
		</main>
	);
}
