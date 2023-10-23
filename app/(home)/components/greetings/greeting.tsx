import { MotionValue, motion } from "framer-motion";
import React from "react";
import Image, { StaticImageData } from "next/image";
type GreetingProps = {
	styleFrameMotion: {
		scaleX: MotionValue;
		y: MotionValue;
	};
	imageSrc: StaticImageData;
	title: string;
	desc: string;
	name: string;
};
const Greeting: React.FC<GreetingProps> = ({
	styleFrameMotion,
	desc,
	imageSrc,
	title,
	name,
}) => {
	return (
		<motion.div
			style={{ ...styleFrameMotion }}
			className="min-h-[27rem] bg-blue-900 px-7 py-6 rounded-xl"
		>
			<h2 className="text-3xl font-semibold">{title}</h2>
			<div className="flex justify-between gap-x-4 mt-5">
				<p className="text-xl">{desc}</p>
				<div className="flex flex-col">
					<div className="relative w-56 h-72 rounded-lg overflow-clip shadow-[0px_0px_8px_3px_rgba(255,255,255,0.2)]">
						<Image
                            priority
							src={imageSrc}
							alt="image"
							fill
							sizes="400px"
							style={{
								objectFit: "cover",
							}}
						/>
					</div>
					<p className="mt-2 font-semibold text-xl">{name}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Greeting;
