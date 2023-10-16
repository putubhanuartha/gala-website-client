"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import AboutCard from "./about-card";
import AboutLogo from "./about-logo";
const AboutGala = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.6 });
	return (
		<section
			ref={ref}
			className="primary-color py-6 relative"
		>
			{isInView && (
				<>
					<motion.div
						initial={{ opacity: 1, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="absolute primary-color h-16 left-0 shadow-[0px_-15px_9px_5px_rgba(255,255,255,0.2)] right-0 z-40 -top-7 md:bottom-24 rounded-t-[70%]"
					></motion.div>
					<div className="container mx-auto relative z-10 my-6 flex flex-col gap-y-12">
						<motion.h1
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
							className="text-center text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase font-semibold"
						>
							Our Spectacular Night
						</motion.h1>
						<AboutCard />
						<AboutLogo />
					</div>
				</>
			)}
		</section>
	);
};

export default AboutGala;
