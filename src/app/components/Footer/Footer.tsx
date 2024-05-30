import React from "react";
import Link from "next/link";
import Image from "next/image";
import EmailIcon from "../../../../public/email-icon.svg";
import FacebookIcon from "../../../../public/facebook-icon.svg";
import InstagramIcon from "../../../../public/instagram-icon.svg";
import ShutterstockIcon from "../../../../public/shutterstock-icon.svg";
import Mailto from "react-mailto";

function getDate() {
	const today = new Date();
	const year = today.getFullYear();
	return `${year}`;
}

export default function Footer() {
	return (
		<div className="bg-black opacity-75 fixed bottom-0 flex w-full justify-around h-10 items-center ">
			<div className="text-white text-xs tracking-wide font-mono  ">
				Copyright © {getDate()} www.fotoroman.pl
			</div>
			<div className=" socials flex flex-row gap-4 items-center">
				<Link href="https://www.shutterstock.com/pl/g/Roman+Giszter?rid=290584745">
					<ShutterstockIcon
						className="text-white hover:text-sky-500 w-6 h-6"
						alt="Shutterstock Icon"
					/>
				</Link>

				<Link href="https://www.instagram.com/romangiszter/">
					<InstagramIcon
						className="text-white hover:text-sky-500 w-5 h-5"
						alt="Instagram Icon"
					/>
				</Link>
				<Link href="https://www.facebook.com/profile.php?id=100007263227928">
					<FacebookIcon
						className="text-white hover:text-sky-500 w-5 h-5"
						alt="Facebook Icon"
					/>
				</Link>
				<a href="mailto:kontakt@fotoroman.pl">
					<EmailIcon
						className="text-white hover:text-sky-500 w-6 h-6"
						alt="Email Icon"
					/>
				</a>
			</div>
		</div>
	);
}
