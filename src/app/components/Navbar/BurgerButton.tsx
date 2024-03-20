import React from "react";

export default function BurgerButton({ isOpen, onClick }) {
	return (
		<button
			className="h-10 w-10 bg-black rounded-3xl overflow-hidden flex justify-center  items-center"
			onClick={onClick}
		>
			<div className="sr-only ">{isOpen ? "Close menu" : "Open menu"}</div>
			<div
				aria-hidden="true"
				className={`absolute h-0.5 w-5 bg-white transition duration-300 ease-in-out ${
					isOpen ? "rotate-45" : "-translate-y-1.5"
				}`}
			/>
			<div
				aria-hidden="true"
				className={`absolute h-0.5 w-5 bg-white transition duration-300 ease-in-out ${
					isOpen ? "opacity-0" : "opacity-100"
				}`}
			/>
			<div
				aria-hidden="true"
				className={`absolute h-0.5 w-5 bg-white transition duration-300 ease-in-out ${
					isOpen ? "-rotate-45" : "translate-y-1.5"
				}`}
			/>
		</button>
	);
}
