import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
export type LineupCardPropsType = {
	title: string;
	description: string;
	imgUrl: string;
	childrenHtml: string;
};
const LineupCard: React.FC<LineupCardPropsType> = ({
	childrenHtml,
	description,
	imgUrl,
	title,
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, amount: 1 });
	return (
		<div
			ref={ref}
			className="flex gap-x-5 md:flex-row flex-col lg:items-center md:items-start items-center"
		>
			{isInView && (
				<motion.div
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 100 }}
					transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
					className="md:w-[20rem] md:h-[25rem] w-full md:max-w-none max-w-sm"
				>
					<Image
						src={imgUrl}
						alt={title}
						width={0}
						height={0}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 30vw"
						className="object-cover object-center md:w-80 w-full lg:h-full lg:max-h-none max-h-72 rounded-lg"
					/>
				</motion.div>
			)}
			<div className="flex flex-col mt-2 flex-1 justify-between">
				<div className="flex flex-col lg:gap-y-4 md:gap-y-3 gap-y-2">
					{isInView && (
						<motion.h3
							initial={{ y: -50, opacity: 0 }}
							animate={{ y: 0, opacity: 100 }}
							transition={{ delay: 0.5, duration: 0.4, ease: "easeInOut" }}
							className="lg:text-3xl text-2xl font-semibold font-Preahvihear capitalize"
						>
							{title}
						</motion.h3>
					)}
					{isInView && (
						<motion.p
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 100 }}
							transition={{ delay: 0.5, duration: 0.4, ease: "easeInOut" }}
							className="font-Preahvihear lg:text-lg md:text-base text-sm md:max-w-none max-w-sm"
						>
							{description}
						</motion.p>
					)}
				</div>
				{isInView && (
					<motion.div
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 100 }}
						transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
						className="max-w-lg min-w-[28rem] lg:block hidden mt-5"
						dangerouslySetInnerHTML={{ __html: childrenHtml }}
					/>
				)}
			</div>
		</div>
	);
};

export default LineupCard;
