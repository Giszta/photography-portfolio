import React from "react";
import EmailIcon from "../../../../public/email-icon.svg";
import FacebookIcon from "../../../../public/facebook-icon.svg";
import InstagramIcon from "../../../../public/instagram-icon.svg";
import ShutterstockIcon from "../../../../public/shutterstock-icon.svg";

function getDate() {
	const today = new Date();
	return today.getFullYear();
}

export default function Footer() {
	return (
		<div className="bg-black opacity-75 fixed bottom-0 flex w-full justify-around h-10 items-center">
			<div className="text-white text-xs tracking-wide font-mono">
				Copyright © {getDate()} www.fotoroman.pl
			</div>
			<div className="socials hidden lg:flex flex-row gap-4 items-center">
				<a
					href="https://www.shutterstock.com/pl/g/Roman+Giszter?rid=290584745"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ShutterstockIcon
						className="text-white w-6 h-6 hover:text-sky-500 duration-500"
						alt="Shutterstock Icon"
					/>
				</a>
				<a
					href="https://www.instagram.com/romangiszter/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<InstagramIcon
						className="text-white hover:text-sky-500 duration-500 w-5 h-5"
						alt="Instagram Icon"
					/>
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=100007263227928"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FacebookIcon
						className="text-white hover:text-sky-500 duration-500 w-5 h-5"
						alt="Facebook Icon"
					/>
				</a>
				<a href="mailto:kontakt@fotoroman.pl">
					<EmailIcon
						className="text-white hover:text-sky-500 duration-500 w-6 h-6"
						alt="Email Icon"
					/>
				</a>
			</div>
		</div>
	);
}
