"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
export type ProfileCardPropsType = {
	isCardAuthActive: boolean;
	setIsCardAuthActive: React.Dispatch<React.SetStateAction<boolean>>;
};
const ProfileCard: React.FC<ProfileCardPropsType> = ({
	isCardAuthActive,
	setIsCardAuthActive,
}) => {
	const [isHidden, setIsHidden] = useState(true);
	useEffect(() => {
		const sto = setTimeout(() => {
			setIsHidden(!isHidden);
		}, 100);
		return () => {
			clearTimeout(sto);
		};
	}, [isCardAuthActive, isHidden]);
	return (
		<ul
			className={`${isCardAuthActive ? "block" : "hidden"} ${
				isHidden ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-9"
			} transition-all duration-300 bg-white absolute -bottom-[200px] max-w-fit min-w-max rounded-md py-2 flex flex-col gap-y-3 z-50 left-[50%] -translate-x-[50%] px-3`}
		>
			<li className="overflow-visible">
				<Link
					onClick={() => {
						setIsCardAuthActive(false);
					}}
					className="text-black text-sm hover:underline underline-offset-2"
					href={"/login"}
				>
					Login
				</Link>
			</li>
			<li className="overflow-visible">
				<Link
					onClick={() => {
						setIsCardAuthActive(false);
					}}
					className="text-black text-sm hover:underline underline-offset-2"
					href={"/register"}
				>
					Register
				</Link>
			</li>
			<li className="overflow-visible">
				<Link
					onClick={() => {
						setIsCardAuthActive(false);
					}}
					className="text-black text-sm hover:underline underline-offset-2"
					href={"/user/waiting-payment"}
				>
					Payment
				</Link>
			</li>
			<li className="overflow-visible">
				<Link
					onClick={() => {
						setIsCardAuthActive(false);
					}}
					className="text-black text-sm hover:underline underline-offset-2"
					href={"/user/ticket"}
				>
					My Ticket
				</Link>
			</li>
			<li className="overflow-visible">
				<button
					onClick={() => {
						setIsCardAuthActive(false);
					}}
					className="text-black text-sm hover:underline underline-offset-2"
				>
					Logout
				</button>
			</li>
		</ul>
	);
};

export default ProfileCard;
