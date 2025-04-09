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
			type="button"
			onClick={() => onClick(name)}
			className={`
				relative overflow-hidden z-10
				cursor-pointer font-serif text-sm lg:text-xl 
				p-2 lg:px-6 lg:py-2 rounded-md border-2	 shadow-lg shadow-stone-500/50
				transition-colors duration-300 ease-in-out
				focus:outline-none focus:ring-2 focus:ring-sky-400
				before:content-[''] before:absolute before:top-1/2 before:left-1/2 
				before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 
				before:h-[500%] before:bg-black before:opacity-80 
				before:transition-all before:duration-500 before:ease-in-out before:z-[-1]
				${
					isSelected
						? "text-white border-sky-500 before:w-[120%]"
						: "text-black border-slate-600 hover:text-white hover:before:w-[120%]"
				}
			`}
		>
			{name}
		</button>
	);
};

export default AlbumFilterButton;
