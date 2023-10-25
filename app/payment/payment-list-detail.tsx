import React from "react";

export type PaymentListDetailProps = {
	tagName: string;
	value: number;
};
const PaymentListDetail: React.FC<PaymentListDetailProps> = ({
	tagName,
	value,
}) => {
	return (
		<div className="flex justify-between">
			<p className="!text-slate-500 md:text-lg text-base">{tagName}</p>
			<p className="!text-slate-500 md:text-lg text-base">Rp. {value}</p>
		</div>
	);
};

export default PaymentListDetail;
