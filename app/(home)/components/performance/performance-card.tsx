import React from "react";
import Image from "next/image";
export type PerformanceCardType = {
	imgSrc: string;
	title: string;
	name: string;
};
const PerformanceCard: React.FC<PerformanceCardType> = ({
	imgSrc,
	name,
	title,
}) => {
	return (
		<div className="relative w-full h-96 overflow-clip rounded-xl shadow-[0px_0px_12px_8px_rgba(255,255,255,0.3)]">
			<h4 className="absolute top-[50%] text-7xl font-semibold z-30 -translate-y-[50%] left-[50%] -translate-x-[50%]">{name}</h4>
			<div className="absolute left-0 right-0 h-full bg-slate-800 opacity-40 z-20"></div>
            <Image
				src={imgSrc}
				alt={title}
				fill
                className="z-10"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
				style={{
					objectFit: "cover",
					objectPosition: "center",
				}}
			/>
		</div>
	);
};

export default PerformanceCard;
