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
			<p className="!text-slate-500 text-lg">{tagName}</p>
			<p className="!text-slate-500 text-lg">Rp. {value}</p>
		</div>
	);
};

export default PaymentListDetail;
