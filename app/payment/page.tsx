"use client";
import React from "react";
import styles from "./payment.module.css";
import Image from "next/image";
import danaImage from "../../public/assets/payment/dana.png";
import gopayImage from "../../public/assets/payment/gopay.png";
import spayImage from "../../public/assets/payment/spay.png";
import InputForm from "@/components/input-form";
import PaymentListDetail from "./payment-list-detail";
export enum PaymentMethod {
	gopay = "gopay",
	dana = "dana",
	spay = "spay",
}
const PaymentPage = () => {
	const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const payment = formData.get("payment");
		const phone = formData.get("phone");
	};
	return (
		<div
			id={styles.payment}
			className="min-h-screen bg-cyan-950"
		>
			<div className="container mx-auto py-6">
				<h3 className="text-3xl mb-4">Payment</h3>
				<div className="flex gap-x-10 2xl:flex-row flex-col 2xl:items-start items-center gap-y-6">
					<div className="max-w-3xl w-full ">
						<p className="text-lg capitalize text-center">
							Pilih metode pembayaran
						</p>
						<form
							onSubmit={handleSubmit}
							className="bg-white px-3 py-5 mt-3 rounded-md flex flex-col gap-y-7"
						>
							<div className="flex gap-x-5 flex-wrap">
								<div>
									<input
										type="radio"
										name="payment"
										id={PaymentMethod.gopay}
										value={PaymentMethod.gopay}
										required
									/>
									<label htmlFor={PaymentMethod.gopay}>
										<div className="hover:shadow-[0px_0px_6px_3px_rgba(46,49,146,0.2)] rounded-md px-5 py-1 border-[0.5px] border-[rgba(46,49,146,0.3)]">
											<Image
												src={gopayImage}
												alt="gopay image"
												sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
												width={0}
												height={0}
												className="w-20 h-9 object-contain"
											/>
											<p className="text-base !text-slate-400">Gopay</p>
										</div>
									</label>
								</div>
								<div>
									<input
										type="radio"
										name="payment"
										id={PaymentMethod.dana}
										value={PaymentMethod.dana}
									/>
									<label htmlFor={PaymentMethod.dana}>
										<div className="hover:shadow-[0px_0px_6px_3px_rgba(46,49,146,0.2)] rounded-md px-5 py-1 border-[0.5px] border-[rgba(46,49,146,0.3)]">
											<Image
												src={danaImage}
												alt="dana image"
												sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
												width={0}
												height={0}
												className="w-20 h-9 object-contain"
											/>
											<p className="text-base !text-slate-400">Dana</p>
										</div>
									</label>
								</div>
								<div>
									<input
										type="radio"
										name="payment"
										id={PaymentMethod.spay}
										value={PaymentMethod.spay}
										className="opacity-0"
									/>
									<label htmlFor={PaymentMethod.spay}>
										<div className="hover:shadow-[0px_0px_6px_3px_rgba(46,49,146,0.2)] rounded-md px-5 py-1 border-[0.5px] border-[rgba(46,49,146,0.3)]">
											<Image
												src={spayImage}
												alt="shopeepay image"
												sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
												width={0}
												height={0}
												className="w-20 h-9 object-contain"
											/>
											<p className="text-base !text-slate-400">Shopeepay</p>
										</div>
									</label>
								</div>
							</div>
							<InputForm
								idHtml="phone"
								labelTitle="Phone number"
								placeholder="Enter your phone number for paymment"
								type="number"
								inputStyle="shadow-lg"
								required
							/>
							<button className="bg-orange-600 w-full py-1 rounded-md hover:bg-orange-700 duration-200 transition-colors">
								PAY NOW
							</button>
						</form>
					</div>
					<div className="flex-1 h-full max-w-3xl w-full">
						<p className="text-lg capitalize text-center">Detail pembayaran</p>
						<div
							id={styles.ticket}
							className="bg-white px-3 py-5 rounded-md mt-3 h-full"
						>
							<p className="px-2 py-1 bg-slate-300 !text-black uppercase text-center">
								Putu Gde Arya Bhanuartha
							</p>
							<div className="flex items-center justify-between mt-2">
								<p className="md:text-lg text-base !text-gray-500">PRESALE - 2</p>
								<p className="!text-gray-500 text-base md:text-lg">3 pcs</p>
							</div>
							<div className="bg-green-700 py-1.5 px-2 mt-3">
								<p className="!text-white text-center">KODE VOUCHER : </p>
							</div>
							<div className="flex flex-col gap-y-3 mt-3">
								<PaymentListDetail
									tagName="Ticket price"
									value={480000}
								/>
								<PaymentListDetail
									tagName="TAX (10%)"
									value={480000}
								/>
								<PaymentListDetail
									tagName="Voucher Discount"
									value={480000}
								/>
								<PaymentListDetail
									tagName="Admin Fee"
									value={480000}
								/>
								<PaymentListDetail
									tagName="Grand Total"
									value={480000}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentPage;
