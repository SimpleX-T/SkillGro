/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			dropShadow: {
				custom: "5px 5px 0px #161439",
				hover: "5px 5px 0px #FFC224",
			},
			backgroundImage: {
				"text-svg": "url('/text-vector.png')",
				"hero-bg": "url(kite_right.png)",
			},
		},
	},
	plugins: [],
};
