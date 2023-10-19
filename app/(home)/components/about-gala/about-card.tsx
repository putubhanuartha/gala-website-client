import React, { useRef } from "react";
import Image from "next/image";
import osisImage from "../../../../public/assets/smansa/osis.png";
import smansaImage from "../../../../public/assets/smansa/smansa.png";
import { motion } from "framer-motion";
type AboutCardType = {
	isInView: boolean;
};
const AboutCard: React.FC<AboutCardType> = ({ isInView }) => {
	return (
		<div className="flex items-center justify-around mx-auto gap-x-0 md:gap-x-2 lg:gap-x-7 border-[1.5px] border-slate-50 rounded-2xl py-7 shadow-[0px_0px_12px_7px_rgba(255,255,255,0.4)] px-5">
			{isInView && (
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
					className="relative xl:h-64 xl:w-52 h-[13rem] w-[20rem]  hidden lg:block"
				>
					<Image
						priority
						src={smansaImage}
						alt="smansa image"
						sizes="300px"
						fill
						style={{ objectFit: "contain" }}
						className="hidden lg:block"
					/>
				</motion.div>
			)}
			<p className="xl:max-w-2xl max-w-lg xl:text-xl lg:text-lg text-base text-center ">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum in
				dolorum provident architecto blanditiis velit est. Veritatis, aliquid
				facere ratione vero maxime beatae sapiente adipisci nesciunt, illum,
				molestias eos eius commodi fugiat dolore assumenda dolor. Expedita
				perspiciatis quae eveniet iusto.
			</p>
			{isInView && (
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
					className="relative xl:h-64 xl:w-52 h-[13rem] w-[20rem]  hidden lg:block"
				>
					<Image
						priority
						src={osisImage}
						alt="osis image"
						sizes="300px"
						fill
						style={{ objectFit: "contain" }}
						className="hidden lg:block"
					/>
				</motion.div>
			)}
		</div>
	);
};

export default AboutCard;
