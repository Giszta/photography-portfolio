import React from "react";

export default function QuoteCircle({ quoteText }: { quoteText: string }) {
	return (
		<div className="animate-fade-left animate-ease-in bg-white bg-opacity-60 relative right-3 flex w-52 h-52 rounded-full justify-center items-center ">
			<div className="text-black  text-center ">{quoteText}</div>
		</div>
	);
}
