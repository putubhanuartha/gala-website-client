/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "5rem",
					xl: "7rem",
					"2xl": "8rem",
				},
			},
			fontFamily: {
				inter: ["Inter", ...defaultTheme.fontFamily.sans],
				poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
				Preahvihear: ["Preahvihear", ...defaultTheme.fontFamily.sans],
				cabin: ["Cabin", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
