import React, { useState } from "react";
import Link from "next/link";
const ButtonLineup = () => {
	const [hovered, setHovered] = useState(false);
	return (
		<Link
			onMouseEnter={() => {
				setHovered(true);
			}}
			onMouseLeave={() => {
				setHovered(false);
			}}
			href={"lineup"}
			className="text-lg relative z-50 flex items-center gap-x-2 h-full md:text-xl lg:text-2xl xl:text-3xl font-semibold  "
		>
			<span className="group-hover:text-blue-900 transition-all duration-700">
				Line Up Artist
			</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				strokeWidth="3"
				stroke="white"
				className={`w-6 h-6 ${
					hovered && "stroke-blue-900"
				} transition-colors duration-700`}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
				></path>
			</svg>
		</Link>
	);
};

export default ButtonLineup;
