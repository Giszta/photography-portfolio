import React from "react";
import NavbarItem from "./NavbarItem";
import { motion } from "framer-motion";
import EmailIcon from "../../../../public/email-icon.svg";
import FacebookIcon from "../../../../public/facebook-icon.svg";
import InstagramIcon from "../../../../public/instagram-icon.svg";
import ShutterstockIcon from "../../../../public/shutterstock-icon.svg";

const containerVariants = {
	hidden: { opacity: 0, y: -50 },
	visible: { opacity: 0.9, y: 0, transition: { duration: 0.5 } },
	exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
	exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const iconVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
	exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

function NavbarMobile() {
	return (
		<motion.div
			className="absolute top-0 left-0 right-0 bottom-0 bg-black z-40 w-screen h-screen flex flex-col justify-center items-center opacity-80"
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={containerVariants}
		>
			<motion.div
				className="flex flex-col items-center justify-center space-y-6 opacity-90"
				initial="hidden"
				animate="visible"
				exit="exit"
				transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
			>
				<motion.div variants={itemVariants}>
					<NavbarItem href="/" title="Strona Główna" />
				</motion.div>
				<motion.div variants={itemVariants}>
					<NavbarItem href="/Albums" title="Galeria Zdjęć" />
				</motion.div>
				<motion.div variants={itemVariants}>
					<NavbarItem href="/AboutMe" title="O Mnie" />
				</motion.div>
			</motion.div>
			<motion.div
				className="socials flex flex-row gap-4 items-center justify-center mt-6"
				initial="hidden"
				animate="visible"
				exit="exit"
				transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
			>
				<motion.div variants={iconVariants}>
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
				</motion.div>
				<motion.div variants={iconVariants}>
					<a
						href="https://www.instagram.com/romangiszter/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<InstagramIcon
							className="text-white w-5 h-5 hover:text-sky-500 duration-500"
							alt="Instagram Icon"
						/>
					</a>
				</motion.div>
				<motion.div variants={iconVariants}>
					<a
						href="https://www.facebook.com/profile.php?id=100007263227928"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FacebookIcon
							className="text-white w-5 h-5 hover:text-sky-500 duration-500"
							alt="Facebook Icon"
						/>
					</a>
				</motion.div>
				<motion.div variants={iconVariants}>
					<a href="mailto:kontakt@fotoroman.pl">
						<EmailIcon
							className="text-white w-6 h-6 hover:text-sky-500 duration-500"
							alt="Email Icon"
						/>
					</a>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default NavbarMobile;
