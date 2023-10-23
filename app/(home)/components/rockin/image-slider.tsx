import React from "react";
import ImageCard, { ImageCardType } from "./image-card";
import { motion } from "framer-motion";
type ImageSlider = {
	images: ImageCardType[];
	speed: number;
};
const ImageSlider: React.FC<ImageSlider> = ({ images, speed }) => {
	return (
		<div className="relative z-10 max-h-screen overflow-hidden">
			<motion.div
				animate={{ translateY: "-50%" }}
				transition={{
					duration: speed,
					ease: "linear",
					repeat: Infinity,
					repeatType: "loop",
				}}
				className="flex flex-col gap-y-3 flex-nowrap w-max gap-x-2"
			>
				{images.map((el, index) => {
					return (
						<ImageCard
							key={index}
							{...el}
						/>
					);
				})}

				{images.map((el, index) => {
					return (
						<ImageCard
							key={index}
							{...el}
						/>
					);
				})}
			</motion.div>
		</div>
	);
};

export default ImageSlider;
