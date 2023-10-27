import { useState } from "react";
import styles from "./nav-button.module.css";
import Link from "next/link";
import DialogTicket from "../my-ticket/dialog-ticket";
import ButtonMenu from "./button-menu";

function Navbutton() {
	let [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<ul
			id={styles.navbutton}
			className="flex items-center lg:gap-x-3 xl:gap-x-5 flex-col lg:flex-row gap-y-3"
		>
			<DialogTicket
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
			/>
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
			<li className="group">
				<button onClick={() => setIsModalOpen(true)}>My Ticket</button>
				<div className="-translate-x-[102%] group-hover:translate-x-0"></div>
			</li>
			<li className="lg:hidden">
				<Link href={"/payment"}>
					My Payment
					<div className="-translate-x-[102%] lg:hidden group-hover:translate-x-0"></div>
				</Link>
			</li>
			<li className="lg:hidden">
				<Link href={"/auth/login"}>
					Login
					<div className="-translate-x-[102%] lg:hidden group-hover:translate-x-0"></div>
				</Link>
			</li>
			<li className="lg:hidden">
				<Link href={"/auth/register"}>Register</Link>
				<div className="-translate-x-[102%] lg:hidden group-hover:translate-x-0"></div>
			</li>
			<div className="lg:block hidden">
				<ButtonMenu />
			</div>
		</ul>
	);
}

export default Navbutton;
