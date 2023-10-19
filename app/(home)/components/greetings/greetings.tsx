"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import torn from "../../../../public/assets/torn/torn.png";
import torn_m from "../../../../public/assets/torn/torn-m.png";
import commitee from "../../../../public/assets/greetings/commitee.jpg";
import osis from "../../../../public/assets/greetings/osis.jpg";
import head from "../../../../public/assets/greetings/head.jpg";
import Greeting from "./greeting";
const Greetings = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
	const { scrollYProgress } = useScroll({ target: ref });
	const scaleCard1 = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.9, 0.88]);
	const scaleCard2 = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.95, 0.9]);
	const scaleCard3 = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.95]);
	const transitionCard1 = useTransform(
		scrollYProgress,
		[0, 0.2, 0.4, 0.6, 0.8, 1],
		[0, 0, 0, 0, -5, -5]
	);
	const transitionCard2 = useTransform(
		scrollYProgress,
		[0, 0.2, 0.4, 0.6, 0.8, 1],
		[300, 0, -400, -400, -410, -420]
	);
	const transitionCard3 = useTransform(
		scrollYProgress,
		[0, 0.2, 0.4, 0.6, 0.8, 1],
		[800, 700, 700, -500, -800, -830]
	);
	return (
		<section
			ref={ref}
			className="pt-28 relative primary-color"
		>
			<div className="absolute w-full h-12 -top-5">
				<Image
					priority
					fill
					src={torn}
					alt="torn image"
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className="container mx-auto">
				{isInView && (
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
						className="text-center text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase font-semibold"
					>
						Greetings From Us
					</motion.h1>
				)}
			</div>
			<div className="pt-20 md:pt-24 sticky top-0">
				<div className="w-full container mx-auto h-[37rem] overflow-hidden pt-11">
					<Greeting
						imageSrc={osis}
						desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam qui
						deserunt dolorem eligendi provident maxime quo est consequatur
						doloribus hic ipsa, corporis consequuntur quis. Odio nostrum impedit
						corporis veniam quae!"
						styleFrameMotion={{ scaleX: scaleCard1, y: transitionCard1 }}
						title="OSIS Chairman"
						name="Dery Dwiki Putra"
					/>
					<Greeting
						imageSrc={head}
						desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
					laborum, deserunt, esse sint animi cum placeat temporibus nobis alias
					aperiam consectetur eum veritatis libero! Error voluptatum, nulla hic,
					possimus eum laborum illum perspiciatis sequi amet molestias quibusdam
					reprehenderit placeat delectus."
						styleFrameMotion={{ scaleX: scaleCard2, y: transitionCard2 }}
						name="Drs Suhandak S.Pd"
						title="School Headmasters"
					/>

					<Greeting
						imageSrc={commitee}
						desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
						corrupti. Maiores exercitationem facilis tenetur quisquam minus in
						quae est voluptatem dolore maxime magnam quis cum impedit soluta, eum
						corrupti illum."
						name="Putu Gde Arya S. Kom"
						styleFrameMotion={{ scaleX: scaleCard3, y: transitionCard3 }}
						title="School Commitee Chairman"
					/>
				</div>
			</div>
			<div className="min-h-[300vh]"></div>
		</section>
	);
};

export default Greetings;
