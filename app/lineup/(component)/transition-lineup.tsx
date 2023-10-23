import React, { useRef } from "react";
import styles from "../transition-lineup.module.css";
import Link from "next/link";
import { useInView, motion } from "framer-motion";
function TransitionLineup() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });
	return (
		<div
			ref={ref}
			className="snap-center bg-fixed h-screen bg-[url('/bg_img/bg_lineup.jpg')] bg-cover"
		>
			{isInView && (
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
					className="container bg-[rgba(100,116,139,0.6)] rounded-lg py-6 min-h-[20rem] flex flex-col justify-between md:top-32 lg:top-44 top-28 relative mx-auto"
				>
					<motion.h2
						initial={{ x: 40, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
						className="font-semibold xl:text-4xl lg:text-3xl uppercase w-full"
					>
						Guest Stars
					</motion.h2>
					<motion.p
						initial={{ x: -40, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.2, ease: "easeInOut" }}
						className="max-w-3xl"
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
						accusamus a cum, cumque soluta animi voluptates dicta eos qui
						commodi ipsum officia itaque minus totam sed reprehenderit earum
						laborum corporis eveniet. Consectetur placeat modi numquam eum non
						nulla dolor minima.
					</motion.p>
					<motion.div
						initial={{ x: 40, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.7, ease: "easeInOut" }}
						className={styles.btn_container}
					>
						<Link
							className="group-hover:text-cyan-950"
							href={"/tickets"}
						>
							Buy Tickets
						</Link>

						<Link href={"/lineup"}>Meet our guest stars</Link>
					</motion.div>
				</motion.div>
			)}
		</div>
	);
}

export default TransitionLineup;
