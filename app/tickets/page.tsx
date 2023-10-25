"use client";
import { FormEvent, useState } from "react";
import MenuTicketCategory from "./menu-category";
import styles from "./tickets.module.css";
import InputForm from "../../components/input-form";
import DetailOrder from "./detail-order";
import { useRouter } from "next/navigation";
export const TicketCategory = {
	presale1: {
		text: "Pre sale 1",
		price: 160000,
	} as TicketCategoryType,
	presale2: {
		text: "Pre sale 2",
		price: 200000,
	} as TicketCategoryType,
	vip: {
		text: "VIP Ticket",
		price: 400000,
	} as TicketCategoryType,
};
export type TicketCategoryType = {
	text: string;
	price: number;
};
const TicketPage = () => {
	const router = useRouter();
	const [ticketCategory, setTicketCategory] =
		useState<TicketCategoryType | null>(null);
	const [qty, setQty] = useState<number>(1);
	function handleSubmitForm(el: FormEvent<HTMLFormElement>) {
		el.preventDefault();
		const formData = new FormData(el.currentTarget);
		console.log(formData);
		router.push("/payment");
	}
	return (
		<div
			id={styles.tickets}
			className="min-h-screen pt-[6rem] md:pt-[7rem] primary-color-revert pb-7"
		>
			<div className="max-w-2xl mx-auto">
				<div className="bg-slate-300 rounded-lg px-3 py-3 flex-col">
					<div className="flex sm:gap-x-3 px-3 sm:flex-row flex-col gap-y-2 sm:gap-y-0">
						<MenuTicketCategory setTicketCategory={setTicketCategory} />
						<div className=" bg-cyan-950 flex-1 rounded-lg flex items-center py-1 sm:py-0">
							<p className="text-center !text-white w-full">
								{ticketCategory
									? ticketCategory.text
									: "Choose your ticket category"}
							</p>
						</div>
					</div>
					<form
						onSubmit={handleSubmitForm}
						className={`flex flex-col px-3  gap-y-3 overflow-hidden ${
							ticketCategory ? "max-h-[45rem] pb-2 mt-4" : "max-h-0"
						} h-fit transition-all duration-700`}
					>
						<InputForm
							required
							idHtml="fullname"
							labelTitle="Your fullname matches the ID"
							placeholder="Fullname"
							type="text"
						/>
						<InputForm
							required
							idHtml="nik"
							labelTitle="NIK"
							placeholder="Nomor Induk Kependudukan / No KTP"
							type="text"
						/>
						<InputForm
							required
							idHtml="email"
							labelTitle="Email"
							placeholder="Email"
							type="email"
							defaultValue={"putuaryabhanu03@gmail.com"}
						/>
						<InputForm
							required
							idHtml="phone"
							labelTitle="Phone Number"
							placeholder="Active Phone Number"
							type="number"
						/>

						<div className="flex gap-x-2">
							<InputForm
								required
								idHtml="qty"
								labelTitle="QTY"
								placeholder="Ticket Quantity"
								defaultValue={1}
								onChange={(el: React.FormEvent<HTMLInputElement>) => {
									setQty(Number(el.currentTarget.value));
								}}
								min={1}
								max={4}
								type="number"
							/>
							<InputForm
								idHtml="voucher"
								labelTitle="Voucher"
								placeholder="Voucher Code"
								type="text"
							/>
						</div>
						<DetailOrder
							qty={qty}
							ticketCategory={ticketCategory}
						/>
						<button className="bg-cyan-900 rounded-lg px-3 py-1.5 !text-white hover:bg-cyan-950 transition-colors duration-300">
							PAY TICKET NOW !
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default TicketPage;
