import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NavbarMobile from "../components/Navbar/Navbar-mobile";
import AboutMePhoto from "../assets/AboutMe/about me.jpg";

export default function AboutMe() {
	return (
		<main>
			<Navbar />
			<NavbarMobile />
			<h1 className="text-center text-4xl pt-32 pb-20"> O Mnie </h1>
			<div className="flex justify-center items-center flex-wrap gap-x-20 gap-y-5">
				<Image
					className="max-w-md w-screen rounded-3xl"
					src={AboutMePhoto}
					alt="About me photo"
					priority
				/>
				<span className="max-w-md w-screen">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
					possimus facere non, error, sapiente dolores aliquid laborum quam et
					dicta nesciunt autem voluptas voluptate ea perspiciatis a doloremque
					saepe, pariatur provident sequi! Nihil culpa, fugiat nesciunt adipisci
					temporibus ad est hic dolores mollitia. Ipsam laboriosam, laborum fuga
					aliquam dolor nemo. Libero harum officiis reiciendis aperiam non minus
					tempore iste quaerat quod sequi odit ab corporis amet expedita
					provident vero soluta, nostrum dolorum magnam, doloribus maxime ipsam,
					eligendi ut sapiente? Nesciunt, voluptatum dolores. Atque assumenda
					quae labore, non aut hic sunt sequi quos inventore, error, voluptates
					provident maiores. Explicabo, dolorum numquam?
				</span>
			</div>
			<Footer />
		</main>
	);
}
