"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import ButtonLineup from "./button-lineup";
import ImageSlider from "./image-slider";
import { ImageCardType } from "./image-card";

const chunk1: ImageCardType[] = [
	{ src: "/assets/throwback/chunk-1/dance-1.jpg", title: "dance 1" },
	{ src: "/assets/throwback/chunk-1/dance-2.jpg", title: "dance 2" },
	{ src: "/assets/throwback/chunk-1/sing-1.jpg", title: "sing 1" },
	{ src: "/assets/throwback/chunk-1/sing-2.jpg", title: "sing 2" },
	{ src: "/assets/throwback/chunk-1/sing-3.jpg", title: "sing 3" },
	{ src: "/assets/throwback/chunk-1/sing-4.jpg", title: "sing 4" },
];
const chunk2: ImageCardType[] = [
	{ src: "/assets/throwback/chunk-2/sing-5.jpg", title: "sing 5" },
	{ src: "/assets/throwback/chunk-2/sing-6.jpg", title: "sing 6" },
	{ src: "/assets/throwback/chunk-2/sing-7.jpg", title: "sing 7" },
	{ src: "/assets/throwback/chunk-2/sing-8.jpg", title: "sing 8" },
	{ src: "/assets/throwback/chunk-2/sing-9.jpg", title: "sing 9" },
	{ src: "/assets/throwback/chunk-2/sing-10.jpg", title: "sing 10" },
];
const Rockin = () => {
	const ref = useRef(null);
	const isInView: boolean = useInView(ref, { amount: 0.4, once: false });
	return (
		<section
			ref={ref}
			className="pb-20 pt-14 min-h-screen flex items-center justify-center relative bg-blue-800"
		>
			<div
				className={`${
					isInView ? "lg:rounded-t-[70%] md:rounded-t-[50%] rounded-t-[20%]" : "rounded-t-none"
				} transition-all duration-700 absolute -top-4 primary-color-revert shadow-[0px_-12px_10px_3px_rgba(34,92,139,0.4)] lg:h-24 md:h-20 h-14  w-full z-30 rotate-180`}
			></div>
			<div className="flex flex-col items-center gap-y-5">
				{isInView && (
					<>
						<motion.h1
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-center z-40 text-3xl relative tracking-wider md:text-4xl lg:text-6xl xl:text-7xl uppercase font-semibold"
						>
							LET&apos;S ROCK IN
						</motion.h1>
						<motion.h1
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-center text-3xl z-40 relative tracking-wider md:text-4xl lg:text-6xl xl:text-7xl uppercase font-semibold"
						>
							GALA 55 2024
						</motion.h1>
						<motion.div
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.8 }}
							className="relative z-40 overflow-clip mt-7 px-3 h-16 group flex items-center justify-center rounded-2xl border-[3px] border-white"
						>
							<ButtonLineup />
							<div className="bg-white  -translate-x-64 group-hover:translate-x-0 transition-all duration-500 absolute left-0 w-full h-full"></div>
						</motion.div>
					</>
				)}
			</div>
			<div className="mx-center flex justify-between opacity-75 items-center container absolute h-full z-20">
				<ImageSlider
					images={chunk1}
					speed={20}
				/>
				<ImageSlider
					images={chunk2}
					speed={15}
				/>

				<ImageSlider
					images={chunk1}
					speed={25}
				/>
				<ImageSlider
					images={chunk2}
					speed={20}
				/>
			</div>
			<div
				className={`${
					isInView ? "lg:rounded-t-[70%] md:rounded-t-[50%] rounded-t-[20%]" : "rounded-t-none"
				} absolute -bottom-2 grey-gradient lg:h-24 md:h-20 h-14 w-full z-30 transition-all duration-700 shadow-[0px_-10px_10px_3px_rgba(34,92,139,0.4)]`}
			></div>
		</section>
	);
};

export default Rockin;
