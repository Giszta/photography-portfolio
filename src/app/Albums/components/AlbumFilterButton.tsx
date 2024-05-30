import React from "react";

const AlbumFilterButton = ({ name, onClick, isSelected }) => {
	const buttonStyles = isSelected
		? "text-white border-blue-500 border-4"
		: "text-white border-slate-600  ";

	return (
		<button
			onClick={() => onClick(name)}
			className={`shadow-lg shadow-stone-500/50 border-4 hover:border-black rounded-full px-6 py-1 text-xl cursor-pointer bg-black bg-shade bg-opacity-60 ${buttonStyles}`}
		>
			{name}
		</button>
	);
};

export default AlbumFilterButton;
