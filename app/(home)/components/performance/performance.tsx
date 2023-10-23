"use client";
import React from "react";
import city from "../../../../public/assets/performance/city.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import leftCloud from "../../../../public/assets/performance/cloud/left.png";
import rightCloud from "../../../../public/assets/performance/cloud/right.png";
import cloud_3 from "../../../../public/assets/performance/cloud/cloud-3.png";
import cloud_4 from "../../../../public/assets/performance/cloud/cloud-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PerformanceCard, { PerformanceCardType } from "./performance-card";
const performanceData: PerformanceCardType[] = [
	{
		imgSrc: "/assets/performance/talent/band-1.jpg",
		name: "Homeband",
		title: "homeband image",
	},
	{
		imgSrc: "/assets/performance/talent/dance-3.jpeg",
		name: "Modern Dance",
		title: "modern dance",
	},
	{
		imgSrc: "/assets/performance/talent/drama-1.jpg",
		name: "Drama Theater",
		title: "drama theater image",
	},
	{
		imgSrc: "/assets/performance/talent/tradisional-dance-1.jpg",
		name: "Traditional Dance",
		title: "traditional dance image",
	},
];
const Performance = () => {
	return (
		<section className="relative overflow-hidden flex flex-col xl:gap-y-20 lg:gap-y-16 md:gap-y-11 gap-y-8 items-center primary-color z-40 min-h-screen pt-48  pb-20">
			<div className="w-full h-32 absolute z-10 lg:-top-10 md:top-0 top-3">
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
			<div className="w-full absolute z-30 flex lg:-top-1 md:top-5 top-10">
				<motion.div
					animate={{ x: 40 }}
					transition={{
						duration: 1.5,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="relative w-[32rem] h-44"
				>
					<Image
						fill
						alt="left-cloud"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						src={leftCloud}
						style={{
							objectFit: "contain",
						}}
					/>
				</motion.div>
				<motion.div
					animate={{ x: -40 }}
					transition={{
						duration: 1.5,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="relative w-[18rem] h-44"
				>
					<Image
						fill
						alt="left-cloud"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						src={cloud_3}
						style={{
							objectFit: "contain",
						}}
					/>
				</motion.div>
				<motion.div
					initial={{ x: -30 }}
					animate={{ x: 40 }}
					transition={{
						duration: 1.5,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="relative w-[18rem] h-44"
				>
					<Image
						fill
						alt="left-cloud"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						src={cloud_4}
						style={{
							objectFit: "contain",
						}}
					/>
				</motion.div>
				<motion.div
					initial={{ x: 40 }}
					animate={{ x: -40 }}
					transition={{
						duration: 1.5,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="relative w-[25rem] h-44"
				>
					<Image
						fill
						alt="left-cloud"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						src={rightCloud}
						style={{
							objectFit: "contain",
						}}
					/>
				</motion.div>
			</div>
			<h1 className="text-center text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase font-semibold">
				OUR TALENT PERFORMANCE
			</h1>
			<div className="overflow-hidden container mx-auto">
				<Swiper
					navigation={true}
					modules={[Navigation]}
					className="mySwiper  px-4 py-4 rounded-xl"
					spaceBetween={30}
					slidesPerView={"auto"}
					loop
				>
					{performanceData.map((el, index) => {
						return (
							<SwiperSlide key={index}>
								<PerformanceCard {...el} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Performance;
