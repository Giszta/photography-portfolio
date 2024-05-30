import React from "react";

const AlbumFilterButton = ({ name, onClick, isSelected }) => {
	const buttonStyles = isSelected
		? "text-white border-sky-500 border-4"
		: "text-white border-slate-600  ";

	return (
		<button
			onClick={() => onClick(name)}
			className={`shadow-lg shadow-stone-500/50 border-4 hover:border-black duration-500 rounded-md px-6 py-1 text-xl cursor-pointer bg-black bg-shade bg-opacity-60 ${buttonStyles}`}
		>
			{name}
		</button>
	);
};

export default AlbumFilterButton;
