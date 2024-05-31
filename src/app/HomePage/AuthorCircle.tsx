import React from "react";

export default function AuthorCircle({ authorName }: { authorName: string }) {
	return (
		<div className="bg-black bg-opacity-65 relative left-3 flex w-48 h-48 md:w-60 md:h-60 rounded-full justify-center items-center  animate-fade-right animate-ease-in">
			<div className="text-white text-center px-5 font-serif text-lg">
				{authorName}
			</div>
			;
		</div>
	);
}
