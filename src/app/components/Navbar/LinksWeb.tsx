import React from "react";

export default function LinksWeb() {
	return (
		<div className="hidden md:block mr-10">
			<div className="flex items-center space-x-10 text-xl tracking-wide font-mono">
				<a
					href="/"
					className="text-white transition-all easy-in-out hover:text-sky-500 duration-500"
				>
					Strona Główna
				</a>
				<a
					href="/Albums"
					className="text-white transition-all easy-in-out hover:text-sky-500 duration-500"
				>
					Galeria Zdjęć
				</a>
				<a
					href="/AboutMe"
					className="text-white transition-all easy-in-out hover:text-sky-500 duration-500"
				>
					O Mnie
				</a>
			</div>
		</div>
	);
}
