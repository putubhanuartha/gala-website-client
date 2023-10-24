import React from "react";
import styles from "./ticket.module.css";
import { GiPerson } from "react-icons/gi";
import qrImage from "public/assets/qr.png";
import Image from "next/image";
const TicketCard = () => {
	return (
		<div
			id={styles.ticket}
			className="flex flex-col gap-y-6"
		>
			<div className="flex justify-between md:flex-row flex-col max-w-xs md:max-w-none gap-y-2">
				<h4 className="flex-1 md:text-base text-sm font-semibold">
					Night of Art Appreciation
				</h4>
				<p className="flex-1 md:text-base text-sm font-semibold">
					For further information, you can visit our customer service contact
				</p>
				<p className="flex-1 md:text-base text-sm font-semibold">
					GOR Tridharma Petrokimia Gresik, Jawa Timur
				</p>
			</div>
			<div className="flex justify-evenly items-center sm:flex-row flex-col gap-y-6">
				<h1 className="xl:text-7xl md:text-5xl text-4xl font-semibold">
					GALA 55 2023
				</h1>
				<div className="border-2 border-dotted border-black px-5 py-4">
					<div className="flex gap-x-2 items-center">
						<p>1 x</p>
						<GiPerson color="black" size={21} />
						<p>Person</p>
					</div>
				</div>
			</div>

			<div className="mx-auto w-fit">
				<Image
					width={0}
					height={0}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover w-56 h-56 "
					src={qrImage}
					alt="qr image"
				/>
				<p className="text-center">
					Issued by :{" "}
					<span className="capitalize text-center">Mawar sukma handani</span>
				</p>
			</div>
		</div>
	);
};

export default TicketCard;
