import React from "react";
import Image from "next/image";
import osisImage from "../../../../public/assets/smansa/osis.png";
import smansaImage from "../../../../public/assets/smansa/smansa.png";
const AboutCard = () => {
	return (
		<div className="flex items-center  justify-around mx-auto gap-x-7 border-[1.5px] border-slate-50 rounded-2xl py-7 shadow-[0px_0px_12px_7px_rgba(255,255,255,0.4)] px-5">
			<div className="relative h-[15rem] w-[23rem] ">
				<Image
					priority
					src={smansaImage}
					alt="smansa image"
					sizes="300px"
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>

			<p className="max-w-2xl text-xl text-center">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum in
				dolorum provident architecto blanditiis velit est. Veritatis, aliquid
				facere ratione vero maxime beatae sapiente adipisci nesciunt, illum,
				molestias eos eius commodi fugiat dolore assumenda dolor. Expedita
				perspiciatis quae eveniet iusto.
			</p>
			<div className="relative h-72 w-96">
				<Image
					priority
					src={osisImage}
					alt="osis image"
					sizes="300px"
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>
		</div>
	);
};

export default AboutCard;
