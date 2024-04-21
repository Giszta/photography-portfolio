import React from "react";
import AuthorCircle from "./AuthorCircle";
import QuoteCircle from "./QuoteCircle";

const homeSlideQuote = [
	{
		id: 1,
		author: "Terence Donovan",
		quote:
			"Problemem fotoamatora jest to, że nie ma on powodów do robienia zdjęć.",
	},
	{
		id: 2,
		author: "DeGriff",
		quote:
			"Zdarzają się chwile, gdy nie masz przy sobie aparatu i wówczas widzisz najwspanialszy widok ,. Nie przejmuj się , że nie możesz go sfotografować. Usiądź i rozkoszuj się tym widokiem",
	},
	{
		id: 3,
		author: "John Doe",
		quote:
			"Mam nadzieję, że żona nie sprzeda mojego sprzętu za taką cenę jaką jej powiedziałem, że go kupiłem.",
	},
	{
		id: 4,
		author: "Henri Cartier Bresson",
		quote: "Pierwsze dziesięć tysięcy zdjęć jest najgorsze.",
	},
	{
		id: 5,
		author: "Joanna Helander",
		quote:
			"Nagle dostrzegłam, że wszystko dokoła jest fascynujące... ale dopiero na fotografii.",
	},
	{
		id: 6,
		author: "Imogen Cunningham",
		quote: "Które z moich zdjęć jest moim ulubionym ? ? To, które zrobię jutro",
	},
	{
		id: 7,
		author: "John Doe",
		quote:
			"Kupno Nikona nie czyni Cię fotografem. Stajesz się zaledwie posiadaczem Nikona",
	},
	{
		id: 8,
		author: "Ansel Adams",
		quote:
			"Nie istnieją reguły opisujące dobrą fotografię, są tylko dobre fotografie.",
	},
	{
		id: 9,
		author: "Ansel Adams",
		quote: "Dwanaście świetnych fotografii każdego roku to wspaniały plon.",
	},
	{
		id: 10,
		author: "Bill Brandt",
		quote:
			"Fotografia nie ma zasad. To nie sport. Ważny jest efekt, a nie sposób, w jaki został osiągnięty.",
	},
	{
		id: 11,
		author: "Robert Bresson",
		quote:
			"Fotografując staraj się pokazać to czego bez ciebie, nikt by nie zobaczył",
	},
];

function getRandomQuote() {
	const randomQuote = Math.floor(Math.random() * homeSlideQuote.length);
	return homeSlideQuote[randomQuote];
}

export default function Circles() {
	const randomQuote = getRandomQuote();

	return (
		<div className="flex justify-center items-center h-screen">
			<AuthorCircle authorName={randomQuote.author} />
			<QuoteCircle quoteText={randomQuote.quote} />
		</div>
	);
}
