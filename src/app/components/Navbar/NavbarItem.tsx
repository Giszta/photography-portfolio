import Link from "next/link";
import React from "react";
interface NavbarItemProps {
  href: string;
  title: string;
}
function NavbarItem({ href, title }: NavbarItemProps) {
  return (
    <Link
      href={href}
      className="text-white transition-all easy-in-out hover:text-sky-500 duration-500"
    >
      {title}
    </Link>
  );
}

export default NavbarItem;
