import React from "react";
import AuthorCircle from "./AuthorCircle";
import QuoteCircle from "./QuoteCircle";

export default function Circles() {
	return (
		<div className="flex justify-center top-0 items-center h-screen">
			<AuthorCircle />
			<QuoteCircle />
		</div>
	);
}
