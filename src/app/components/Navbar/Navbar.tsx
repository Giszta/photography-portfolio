"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.webp";
import NavbarItem from "./NavbarItem";
import { Squash as Hamburger } from "hamburger-react";
import NavbarMobile from "./NavbarMobile";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="">
			<div className="md:bg-black opacity-75 absolute w-screen md:shadow-lg shadow-stone-500/50 top-0 z-10">
				<div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
					<div className="flex items-center justify-between h-20">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<a href="/" className="text-white sm:bg-black ">
									<Image
										className="bg-black rounded-3xl overflow-hidden"
										src={logo}
										alt="Logo"
										priority
									/>
								</a>
							</div>
						</div>
						<div className="hidden md:block mr-10">
							<div className="flex items-center space-x-10 text-xl tracking-wide font-mono">
								<NavbarItem href="/" title="Strona Główna" />
								<NavbarItem href="/Albums" title="Galeria Zdjęć" />
								<NavbarItem href="/AboutMe" title="O Mnie" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="z-50 absolute top-4 right-4 h-12 w-12 opacity-75 block md:hidden bg-black rounded-full">
				<Hamburger
					color="#ffffff"
					size={24}
					toggled={isOpen}
					toggle={setIsOpen}
				/>
			</div>
			<AnimatePresence>{isOpen && <NavbarMobile />}</AnimatePresence>
		</nav>
	);
}
