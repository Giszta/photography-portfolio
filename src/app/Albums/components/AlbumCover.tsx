import Image from "next/image";
import AlbumCoverPhoto from "../../assets/gallery/Graffiti/001.jpg";

export default function AlbumCover() {
	return (
		<Image
			className="min-w-sm photo"
			src={AlbumCoverPhoto}
			alt="Album Cover"
			priority
		/>
	);
}
