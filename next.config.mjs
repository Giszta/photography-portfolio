/** @type {import('next').NextConfig} */

import svgr from "@svgr/webpack";

const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		return config;
	},
};
export default nextConfig;
