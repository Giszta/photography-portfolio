import Image from "next/image";
import { Photo } from "@/types/Gallery_Types";

//{ albumCover }: { albumCover: Photo }
interface AlbumItemType {
	title: string;
	src: string;
	tag: string[];
}

export default function AlbumItem({ title, src, tag }: AlbumItemType) {
	return (
		<div>
			<h1 className="text-center ">{title}</h1>
			<div>
				<div className="frames">
					<div className="frame">
						<Image
							className="min-w-sm photo"
							src={src}
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
