import React from "react";

export default function AuthorCircle({ authorName }: { authorName: string }) {
	return (
		<div className="bg-black bg-opacity-65 relative left-3 flex w-52 h-52 rounded-full justify-center items-center  animate-fade-right animate-ease-in">
			<div className="text-white text-center px-5 ">{authorName}</div>;
		</div>
	);
}
