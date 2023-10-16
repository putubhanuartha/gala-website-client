"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { useInView, motion } from "framer-motion";
import smansaImage from "../../public/assets/smansa/smansa.png";
import smansaOsis from "../../public/assets/smansa/osis.png";
import jatimImage from "../../public/assets/sponsors/jatim.png";
import garudaImage from "../../public/assets/sponsors/garuda.png";
import mandiriImage from "../../public/assets/sponsors/mandiri.png";
import wonderfulImage from "../../public/assets/sponsors/wonderful.png";
const Footer = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.1, once: false });
	return (
		<div
			ref={ref}
			className="bg-blue-950 min-h-[16rem]"
		>
			{isInView && (
				<motion.footer
					initial={{ opacity: 0, translateY: 100 }}
					animate={{ opacity: 1, translateY: 0 }}
					transition={{
						duration: 0.7,
						delay: 0,
						ease: [0.61, 0.25, 0.0, 1.65],
					}}
					id={`${styles.footer}`}
					className="h-full"
				>
					<div className="container mx-auto h-full text-white flex items-start gap-y-10 flex-wrap py-5">
						<div className="max-w-sm flex flex-col gap-y-3">
							<h1 className="font-cabin text-3xl font-semibold">
								We Have Pride !
							</h1>
							<p className="text-sm">
								Jalan Arif Rahman Hakim Gresik No.1, Sidokumpul, Gresik,
								Kramatandap, Gapurosukolilo, Kec. Gresik, Kabupaten Gresik, Jawa
								Timur 61111
							</p>
							<div>
								<p>info@galafestival.com</p>
								<p>HOTLINE : +62 811 813 3556</p>
							</div>
							<Link
								href="https://sman1gresik.sch.id/"
								className="flex items-center mt-1"
							>
								<div className="w-14 h-14 relative">
									<Image
										priority={true}
										src={smansaOsis}
										alt="smansa-osis"
										fill
										sizes="(max-width: 768px) 300px, (max-width: 1200px) 200px, 100px"
										style={{
											objectFit: "cover",
										}}
									/>
								</div>

								<div className="w-14 h-12 relative">
									<Image
										fill
										src={smansaImage}
										priority={true}
										alt="smansa"
										sizes="(max-width: 768px) 300px, (max-width: 1200px) 200px, 100px"
										style={{
											objectFit: "cover",
										}}
									/>
								</div>
							</Link>
						</div>
						<div className={`${styles.sponsors} `}>
							<h3 className="font-cabin text-2xl font-semibold">
								Our Sponsors
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2	 gap-5 mt-5">
								<div className="bg-white px-2 py-2 rounded-md">
									<Link href="https://www.bankjatim.co.id/">
										<Image
											src={jatimImage}
											priority={true}
											alt="bank jatim image"
											fill
											sizes="(max-width: 768px) 500px, (max-width: 1200px) 400px, 300px"
											style={{
												objectFit: "contain",
											}}
										/>
									</Link>
								</div>
								<div className="bg-white py-2 rounded-md">
									<Link href="https://web.garuda-indonesia.com/">
										<Image
											src={garudaImage}
											priority={true}
											alt="garuda indonesia image"
											fill
											sizes="(max-width: 768px) 500px, (max-width: 1200px) 400px, 300px"
											style={{
												objectFit: "contain",
											}}
										/>
									</Link>
								</div>
								<div className="bg-white py-2 rounded-md">
									<Link href="https://bankmandiri.co.id/">
										<Image
											src={mandiriImage}
											priority={true}
											alt="bank mandiri image"
											fill
											sizes="(max-width: 768px) 500px, (max-width: 1200px) 400px, 300px"
											style={{
												objectFit: "contain",
											}}
										/>
									</Link>
								</div>
								<div className="bg-white rounded-md py-2">
									<Link href="https://www.indonesia.travel/id/id/home">
										<Image
											src={wonderfulImage}
											priority={true}
											alt="wonderfull indonesia image"
											fill
											sizes="(max-width: 768px) 500px, (max-width: 1200px) 400px, 300px"
											style={{
												objectFit: "contain",
											}}
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</motion.footer>
			)}
		</div>
	);
};

export default Footer;
