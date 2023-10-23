"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { interArtist, domesticArtist } from "@/data/artistData";
import LineupCard from "./(component)/lineup-card";
import Link from "next/link";
const LineupPage = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });
	const refLocal = useRef<HTMLDivElement>(null);
	const isInViewLocal = useInView(refLocal, { once: true, amount: 0.5 });
	return (
		<>
			<div
				ref={refLocal}
				className="min-h-screen flex bg-[url('/assets/bg_img/bg_local.jpg')] bg-fixed bg-cover bg-center bg-no-repeat"
			>
				<h1 className="m-auto lg:text-7xl md:text-5xl sm:text-4xl text-2xl font-semibold text-center ">
					{isInViewLocal && (
						<motion.span
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 100 }}
							transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
							className="font-Preahvihear block"
						>
							DOMESTIC
						</motion.span>
					)}{" "}
					{isInViewLocal && (
						<motion.span
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 100 }}
							transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
							className="block mt-5 font-Preahvihear"
						>
							ARTIST
						</motion.span>
					)}
				</h1>
			</div>
			<div className="color-lineup-revert text-white">
				<div className="container mx-auto py-8 flex flex-col gap-y-16">
					{domesticArtist.map((el, index) => {
						return (
							<LineupCard
								childrenHtml={el.childrenHtml}
								description={el.description}
								imgUrl={el.imgUrl}
								title={el.title}
								key={index}
							/>
						);
					})}
				</div>
			</div>
			<div
				ref={ref}
				className="min-h-screen flex bg-[url('/assets/bg_img/bg_international.jpg')] bg-fixed bg-cover bg-center bg-no-repeat"
			>
				<h1 className="m-auto lg:text-7xl md:text-5xl sm:text-4xl text-2xl  font-semibold text-center ">
					{isInView && (
						<motion.span
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 100 }}
							transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
							className="font-Preahvihear block"
						>
							INTERNATIONAL
						</motion.span>
					)}{" "}
					{isInView && (
						<motion.span
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 100 }}
							transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
							className="block mt-5 font-Preahvihear"
						>
							ARTIST
						</motion.span>
					)}
				</h1>
			</div>
			<div className="color-lineup-revert text-white">
				<div className="container mx-auto py-8 flex flex-col gap-y-16">
					{interArtist.map((el, index) => {
						return (
							<LineupCard
								childrenHtml={el.childrenHtml}
								description={el.description}
								imgUrl={el.imgUrl}
								title={el.title}
								key={index}
							/>
						);
					})}
					<Link
						className="text-white text-center active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-150 -translate-x-1 -translate-y-1 shadow-[4px_4px_0px_3px_rgba(6,88,195,0.3)] bg-sky-900 mx-auto w-fit py-3 lg:text-3xl md:text-2xl text-xl  px-5 rounded-lg"
						href={"/tickets"}
					>
						Buy Tickets Now !
					</Link>
				</div>
			</div>
		</>
	);
};

export default LineupPage;
