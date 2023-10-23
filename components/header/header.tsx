"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Navbutton from "./nav-button";
import { Spin as Hamburger } from "hamburger-react";
const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<div
			className={`fixed left-0 right-0 min-h-[5rem] md:min-h-[6rem] py-4 flex flex-col items-center justify-center z-50 shadow-[0px_2px_12px_10px_rgba(255,255,255,0.1)] bg-[rgba(10,11,32,0.8)]`}
		>
			<div className="container mx-auto flex items-center justify-between">
				<Link
					href="/"
					className="border-[1px] border-white p-2"
				>
					<div className="w-20 h-5 md:w-28 md:h-8 relative">
						<Image
							priority
							src={logo}
							alt="gala logo"
							fill
							sizes="80px"
							style={{
								objectFit: "cover",
							}}
						/>
					</div>
				</Link>
				<div className="hidden lg:block">
					<Navbutton />
				</div>
				<div className="lg:hidden">
					<Hamburger
						color="white"
						onToggle={() => {
							setOpen(!open);
						}}
						toggled={open}
					/>
				</div>
			</div>
			<div className={`${open ? "" : "hidden"} py-3 relative bottom-0`}>
				<Navbutton />
			</div>
		</div>
	);
};

export default Header;
