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
		<div className="fixed left-0 right-0 py-3 md:py-4 lg:py-5 justify-evenly z-50 shadow-[0px_2px_12px_10px_rgba(255,255,255,0.1)] bg-[rgba(10,11,32,0.8)]">
			<div className="container mx-auto flex items-center justify-between">
				<Link
					href="/"
					className="border-[1px] border-white p-2"
				>
					<Image
						src={logo}
						alt="gala logo"
						className="w-28"
					/>
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
			<div className={`${open ? "" : "hidden"} mt-3 py-3`}>
				<Navbutton />
			</div>
		</div>
	);
};

export default Header;
