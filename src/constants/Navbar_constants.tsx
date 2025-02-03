import { Icon } from "@iconify/react/dist/iconify.js";

type NavbarItem = {
	title: string;
	path: string;
	icon: React.ReactNode;
};
export const NAVBAR_ITEMS: NavbarItem[] = [
	{
		title: "Strona Główna",
		path: "/",
		icon: <Icon icon="lucide:home" width="24" height="24" />,
	},
	{
		title: "Galeria Zdjęć",
		path: "/Albums",
		icon: <Icon icon="lucide:camera" width="24" height="24" />,
	},
	{
		title: "O mnie",
		path: "/AboutMe",
		icon: <Icon icon="lucide:user" width="24" height="24" />,
	},
];
