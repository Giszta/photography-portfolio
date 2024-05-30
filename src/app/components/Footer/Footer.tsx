import React from "react";

function getDate() {
	const today = new Date();
	const year = today.getFullYear();
	return `${year}`;
}

export default function Footer() {
	return (
		<div className="bg-black opacity-75 fixed bottom-0 flex w-full justify-center ">
			<div className="text-white text-xs tracking-wide font-mono  ">
				Copyright © {getDate()} www.fotoroman.pl
			</div>
		</div>
	);
}
