import React from "react";
import Image, { StaticImageData } from "next/image";
export type ImageCardType = {
	src: string;
	title: string;
};
const ImageCard: React.FC<ImageCardType> = ({ src, title }) => {
	return (
		<div className="relative w-24 h-36 sm:w-32 sm:h-40 md:w-44 md:h-56 lg:w-52 lg:h-64 xl:w-64 xl:h-96 overflow-clip rounded-3xl">
			<Image
				fill
				priority
				placeholder="blur"
				src={src}
				blurDataURL={src}
				alt={title}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				style={{ objectFit: "cover" }}
			/>
		</div>
	);
};

export default ImageCard;
