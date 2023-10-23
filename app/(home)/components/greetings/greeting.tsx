import { MotionValue, motion } from "framer-motion";
import React from "react";
import Image, { StaticImageData } from "next/image";
type GreetingProps = {
	styleFrameMotion:
		| {
				scaleX: MotionValue;
				y: MotionValue;
		  }
		| undefined;
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
			<h2 className="lg:text-3xl md:text-2xl text-xl font-semibold">{title}</h2>
			<div className="flex md:flex-row flex-col justify-between md:gap-x-4 mt-5 gap-y-5 md:gap-y-0">
				<p className="lg:text-xl md:text-lg text-base">{desc}</p>
				<div className="flex flex-col">
					<div className="relative lg:w-56 lg:h-72 md:w-44 md:h-60 w-36 h-48 rounded-lg overflow-clip shadow-[0px_0px_8px_3px_rgba(255,255,255,0.2)]">
						<Image
							priority
							src={imageSrc}
							alt="image"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
