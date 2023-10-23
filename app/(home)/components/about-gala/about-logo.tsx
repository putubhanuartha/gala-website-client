import React from "react";
import Image from "next/image";
import logo from "../../../../public/assets/logo.png";
const AboutLogo = () => {
	return (
		<div className="relative lg:w-80 bg-transparent md:h-20 md:w-72 lg:h-24 h-16 w-60 mx-auto">
			<Image
                priority
				src={logo}
				alt="logo smansa"
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				style={{
					objectFit: "cover",
				}}
			/>
		</div>
	);
};

export default AboutLogo;
