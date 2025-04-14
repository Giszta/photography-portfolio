/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				album: "repeat(auto-fit, minmax(350px, 1fr));",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"spin-slow": "spin 2s linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animated")],
};
