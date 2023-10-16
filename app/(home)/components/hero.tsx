"use client";
import React from "react";
import "./hero.css";
import { motion } from "framer-motion";
function Hero() {
	return (
		<section className="relative -z-20 snap-center h-screen flex items-center justify-center">
			<div className="flex relative z-20 flex-col items-center xl:gap-y-20 lg:gap-y-16 sm:gap-y-10 md:gap-y-14 gap-y-6 top-5 md:top-10 ">
				<motion.div
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.4, delay: 0, ease: "easeInOut" }}
					className="gala-title"
				>
					<h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-widest">
						GALA 56
					</h1>
					<motion.p
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
						className="uppercase text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-wider lg:mt-4"
					>
						Unleash the creativity
					</motion.p>
				</motion.div>

				<div>
					<motion.p
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.3, ease: "easeInOut", delay: 0.7 }}
						className="subtag"
					>
						GOR PETROKIMIA GRESIK
					</motion.p>
					<motion.p
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.3, ease: "easeInOut", delay: 0.7 }}
						className="subtag lg:mt-4"
					>
						20 SEPTEMBER 2024
					</motion.p>
				</div>
			</div>
			<video
				autoPlay={true}
				preload="auto"
				muted={true}
				loop={true}
				className="object-cover absolute w-full h-full brightness-50 z-10"
			>
				<source
					src={"/assets/video.mp4"}
					type="video/mp4"
				/>
			</video>
		</section>
	);
}

export default Hero;
