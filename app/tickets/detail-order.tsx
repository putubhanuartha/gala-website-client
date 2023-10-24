import React from "react";
import styles from "./tickets.module.css";
import { TicketCategoryType } from "./page";
type DetailOrderProps = {
	ticketCategory: TicketCategoryType | null;
	qty: number;
};
const DetailOrder: React.FC<DetailOrderProps> = ({ qty, ticketCategory }) => {
	const price = qty * (ticketCategory?.price as number);
	const tax = 0.1 * price;

	return (
		<div id={styles.detail_order}>
			<h5 className="text-slate-600">Detail Order</h5>
			<div className="rounded-lg overflow-clip mt-1">
				<div
					id={styles.header_table}
					className="flex justify-between bg-orange-400  px-3 py-1"
				>
					<p className="font-semibold text-lg">Item</p>
					<p className="font-semibold text-lg">Qty</p>
					<p className="font-semibold text-lg">Subtotal</p>
				</div>
				<div className="flex justify-between px-3 py-1 bg-slate-100">
					<p>{ticketCategory?.text}</p>
					<p>Rp. {price}</p>
				</div>
				<div className="flex justify-between px-3 py-1 bg-white">
					<p>TAX ( 10% )</p>
					<p>Rp. {tax}</p>
				</div>
				<div className="flex justify-between px-3 pt-1 pb-3 bg-slate-100">
					<p>Grand Total</p>
					<p>Rp. {price + tax}</p>
				</div>
			</div>
		</div>
	);
};

export default DetailOrder;
