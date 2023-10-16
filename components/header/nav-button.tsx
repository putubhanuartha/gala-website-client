"use client";
import { useState, useEffect, useRef } from "react";
import "./nav-button.css";
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";
import ProfileCard from "./profile-card";
function Navbutton() {
	const [isCardAuthActive, setIsCardAuthActive] = useState(false);
	const listAuthCardRef = useRef<HTMLLIElement>(null);
	useEffect(() => {
		const docClickListener = (e: any) => {
			if (!listAuthCardRef.current?.contains(e.target)) {
				setIsCardAuthActive(false);
			}
		};
		document.addEventListener("click", docClickListener);
		return () => {
			removeEventListener("click", docClickListener);
		};
	}, []);
	return (
		<ul className="flex items-center lg:gap-x-3 xl:gap-x-5 flex-col lg:flex-row gap-y-3">
			<li className="group">
				<Link href={"/"}>Home</Link>
				<div className="-translate-x-[102%] group-hover:translate-x-0"></div>
			</li>
			<li className="group">
				<Link href={"/lineup"}>Lineup</Link>
				<div className="-translate-x-[102%] group-hover:translate-x-0"></div>
			</li>
			<li className="group">
				<Link href={"/tickets"}>Ticket</Link>
				<div className="-translate-x-[102%] group-hover:translate-x-0"></div>
			</li>
			<li className="group">
				<Link href={"/faq"}>FAQ</Link>
				<div className="-translate-x-[102%] group-hover:translate-x-0"></div>
			</li>

			<li
				ref={listAuthCardRef}
				className="relative overflow-visible "
			>
				<button
					onClick={() => {
						setIsCardAuthActive(!isCardAuthActive);
					}}
					type="button"
					className="rounded-full lg:block hidden p-1 border-[0.8px] border-white"
				>
					<BsFillPersonFill
						color="white"
						size={25}
					/>
				</button>
			</li>
		</ul>
	);
}

export default Navbutton;
