import React from "react";
import Image from "next/image";
import logo from "../../../../public/assets/logo.png";
const AboutLogo = () => {
	return (
		<div className="relative w-80 bg-transparent h-24 mx-auto">
			<Image
                priority
				src={logo}
				alt="logo smansa"
				fill
				sizes="400px"
				style={{
					objectFit: "cover",
				}}
			/>
		</div>
	);
};

export default AboutLogo;
