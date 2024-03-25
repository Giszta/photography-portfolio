import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AlbumItem from "./components/AlbumItem";

export default function Albums() {
	return (
		<main>
			<Navbar />
			<h1 className="text-center text-4xl pt-32 pb-20 ">Galeria Zdjęć</h1>
			<div className="max-w-7xl grid gap-10 grid-cols-album m-auto px-5">
				<AlbumItem />
				<AlbumItem />
				<AlbumItem />
				<AlbumItem />
				<AlbumItem />
				<AlbumItem />
			</div>

			<Footer />
		</main>
	);
}
