import React from "react";
interface NavbarItemProps {
	href: string;
	title: string;
}
function NavbarItem({ href, title }: NavbarItemProps) {
	return (
		<a
			href={href}
			className="text-white transition-all easy-in-out hover:text-sky-500 duration-500"
		>
			{title}
		</a>
	);
}

export default NavbarItem;
