/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				heroBg: "url('/src/assets/images/hero-bg.jpg')",
			},
		},
	},
	plugins: [],
};
