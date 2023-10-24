import React from "react";
import styles from "./payment.module.css";
const PaymentPage = () => {
	return (
		<div
			id={styles.payment}
			className="min-h-screen bg-cyan-950"
		>
			<div className="container mx-auto py-6">
				<p>Payment</p>
			</div>
		</div>
	);
};

export default PaymentPage;
