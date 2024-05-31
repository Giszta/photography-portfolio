import React from "react";

const AlbumFilterButton = ({ name, onClick, isSelected }) => {
	const buttonStyles = isSelected
		? "text-#e7e5e4 bg-black opacity-80 border-sky-500 border-4"
		: "text-black border-slate-600  ";

	return (
		<button
			onClick={() => onClick(name)}
			className={`font-serif max-w-[150px] w-full shadow-lg shadow-stone-500/50 border-4 hover:border-sky-500 duration-500 rounded-md px-6 py-1 text-sm md:text-xl cursor-pointer  bg-shade ${buttonStyles}`}
		>
			{name}
		</button>
	);
};

export default AlbumFilterButton;
