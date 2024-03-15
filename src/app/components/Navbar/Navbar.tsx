"use client";
import React, { useState } from "react";
import LinksWeb from "./LinksWeb";
import Image from "next/image";
import logo from "../../assets/logo.webp";

export default function Navbar() {
	return (
		<nav className="lg:bg-black opacity-75">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
					<LinksWeb />
				</div>
			</div>
		</nav>
	);
}
