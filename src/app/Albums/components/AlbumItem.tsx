import Image from "next/image";
import React from "react";

interface AlbumItemType {
	title: string;
	src: string;
	tags: string[];
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function AlbumItem({
	title,
	src,
	tags,
	onClick,
}: AlbumItemType) {
	return (
		<div onClick={onClick}>
			<h1 className="text-center">{title}</h1>
			<div>
				<div className="frames">
					<div className="frame">
						{src ? (
							<Image
								className="min-w-sm photo w-[250px] h-[150px] md:w-[300px] md:h-[180px]"
								src={src}
								width={300}
								height={300}
								alt="Album Cover"
								priority
							/>
						) : (
							<div className="min-w-sm photo w-[250px] h-[150px] md:w-[300px] md:h-[180px] bg-gray-200 flex items-center justify-center">
								Brak zdjęcia
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
