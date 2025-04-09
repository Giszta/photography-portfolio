import Image from "next/image";
import React from "react";

interface AlbumItemType {
	title: string;
	src: string;
	tags: string[];
	onClick: () => void;
}

export default function AlbumItem({
	title,
	src,
	tags,
	onClick,
}: AlbumItemType) {
	return (
		<div onClick={onClick} className="cursor-pointer">
			<h1 className="text-center">{title}</h1>
			<div>
				<div className="frames">
					<div className="frame">
						{src ? (
							<Image
								className="min-w-sm photo w-[250px] h-[150px] lg:w-[300px] lg:h-[180px]"
								src={src}
								width={300}
								height={300}
								alt={`Okładka albumu ${title}`}
								priority
							/>
						) : (
							<div className="min-w-sm photo w-[250px] h-[150px] lg:w-[300px] lg:h-[180px] bg-gray-200 flex items-center justify-center">
								Brak zdjęcia
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
