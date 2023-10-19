import React from "react";
import city from "../../../../public/assets/performance/city.svg";
import Image from "next/image";
const Performance = () => {
	return (
		<div className="primary-color py-28 relative">
			<div className="w-full h-60 relative -top-14 z-10">
				<Image
					src={city}
					alt="city image"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
			<h1 className="text-center text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase font-semibold">
				OUR TALENT PERFORMANCE
			</h1>
		</div>
	);
};

export default Performance;
