import Image from "next/image";
import { Photo } from "@/types/Gallery_Types";

export default function AlbumItem({ albumCover }: { albumCover: Photo }) {
	return (
		<div className="">
			<h1 className="text-center pb-5">{albumCover.title}</h1>
			<div>
				<div className="frames">
					<div className="frame">
						<Image
							className="min-w-sm photo"
							src={albumCover.src}
							width={300}
							height={300}
							alt="Album Cover"
							priority
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
