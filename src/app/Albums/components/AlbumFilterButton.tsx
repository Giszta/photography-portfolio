import React from "react";

interface AlbumFilterButtonType {
	name: string;
	onClick: (name: string) => void;
	isSelected: boolean;
}

const AlbumFilterButton = ({
	name,
	onClick,
	isSelected,
}: AlbumFilterButtonType) => {
	return (
		<button
			onClick={() => onClick(name)}
			className={`
				cursor-pointer relative overflow-hidden z-10 
				px-6 py-1 text-sm lg:text-xl font-serif 
				border-4 shadow-lg shadow-stone-500/50 rounded-md 
				transition-all duration-300 ease-in-out
				border-black text-black 
				before:content-[''] before:absolute before:top-1/2 before:left-1/2 
				before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 
				before:h-[500%] before:bg-black before:opacity-80 
				before:transition-all before:duration-500 before:ease-in-out before:z-[-1] 
				${
					isSelected
						? "text-white before:w-[120%] border-sky-500"
						: "before:w-0 hover:before:w-[120%] hover:text-white border-slate-600"
				}
			`}
		>
			{name}
		</button>
	);
};

export default AlbumFilterButton;
