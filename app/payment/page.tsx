"use client";
import React, { useEffect, useState } from "react";
import styles from "./payment.module.css";
import Image from "next/image";
import danaImage from "../../public/assets/payment/dana.png";
import gopayImage from "../../public/assets/payment/gopay.png";
import spayImage from "../../public/assets/payment/spay.png";
import InputForm from "@/components/input-form";
import PaymentListDetail from "./payment-list-detail";
import { FormDataType } from "../tickets/tickets.type";
import LoaderDetailPembayaran from "./loader-detail-pembayaran";
import { EwalletType } from "../tickets/tickets.type";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const PaymentMethod = {
	gopay: {
		text: "gopay",
		fee: 3000,
	} as EwalletType,
	dana: { text: "dana", fee: 1000 } as EwalletType,
	spay: {
		text: "spay",
		fee: 5000,
	} as EwalletType,
};

const PaymentPage = () => {
	const router = useRouter();
	const [formDataState, setFormDataState] = useState<FormDataType | null>(null);
	const [selectedEwallet, setSelectedEwallet] = useState<
		"gopay" | "dana" | "spay"
	>("gopay");

	useEffect(() => {
		const sessionStorageFormData = window.sessionStorage.getItem("FORM_DATA");
		if (sessionStorageFormData) {
			const formData = JSON.parse(sessionStorageFormData) as FormDataType;
			setFormDataState(formData);
		} else {
			router.replace("/tickets");
			toast("Fill ticket form first", {
				type: "warning",
				position: "top-center",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	}, [router]);
	const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const payment = formData.get("payment");
		const phone = formData.get("phone");
		let grandTotalPrice;
		if (formDataState) {
			grandTotalPrice =
				formDataState.ticketCategoryData.price * Number(formDataState.qty) +
				((Number(formDataState.tax) / 100) *
					Number(formDataState.ticketCategoryData.price) +
					PaymentMethod[selectedEwallet].fee -
					(formDataState.voucher !== "" ? 1000 : 0));
		}
		console.log(payment, phone, grandTotalPrice);
		toast.success("Pembayaran sedang di proses !", {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
		window.sessionStorage.removeItem("FORM_DATA")
		router.replace("/")
	};
	const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedEwallet(e.target.value as any);
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
										id={PaymentMethod.gopay.text}
										value={PaymentMethod.gopay.text}
										onChange={handleChangeRadio}
										defaultValue={selectedEwallet}
										defaultChecked
										required
									/>
									<label htmlFor={PaymentMethod.gopay.text}>
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
										id={PaymentMethod.dana.text}
										value={PaymentMethod.dana.text}
										onChange={handleChangeRadio}
									/>
									<label htmlFor={PaymentMethod.dana.text}>
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
										id={PaymentMethod.spay.text}
										value={PaymentMethod.spay.text}
										className="opacity-0"
										onChange={handleChangeRadio}
									/>
									<label htmlFor={PaymentMethod.spay.text}>
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

							{formDataState ? (
								<InputForm
									idHtml="phone"
									labelTitle="Phone number"
									placeholder="Enter your phone number for paymment"
									type="number"
									inputStyle="shadow-lg"
									required
									defaultValue={formDataState.phone}
								/>
							) : (
								<div className="bg-slate-300 animate-pulse h-7"></div>
							)}
							<button className="bg-orange-600 w-full py-1 rounded-md hover:bg-orange-700 duration-200 transition-colors">
								PAY NOW
							</button>
						</form>
					</div>
					<div className="flex-1 h-full max-w-3xl w-full ">
						<p className="text-lg capitalize text-center">Detail pembayaran</p>
						{formDataState ? (
							<div
								id={styles.ticket}
								className="bg-white px-3 py-5 rounded-md mt-3 h-full"
							>
								<p className="px-2 py-1 bg-slate-300 !text-black uppercase text-center">
									{formDataState.fullname}
								</p>
								<div className="flex items-center justify-between mt-2">
									<p className="md:text-lg text-base !text-gray-500">
										{formDataState.ticketCategoryData.text}
									</p>
									<p className="!text-gray-500 text-base md:text-lg">
										{formDataState.qty} pcs
									</p>
								</div>
								<div className="bg-green-700 py-1.5 px-2 mt-3">
									<p className="!text-white text-center">
										KODE VOUCHER : {formDataState.voucher}
									</p>
								</div>
								<div className="flex flex-col gap-y-3 mt-3">
									<PaymentListDetail
										tagName="Ticket price"
										value={
											Number(formDataState.ticketCategoryData.price) *
											Number(formDataState.qty)
										}
									/>
									<PaymentListDetail
										tagName="TAX (10%)"
										value={
											(Number(formDataState.tax) / 100) *
											Number(formDataState.ticketCategoryData.price)
										}
									/>
									<PaymentListDetail
										tagName="Voucher Discount"
										value={formDataState.voucher !== "" ? 1000 : 0}
									/>
									<PaymentListDetail
										tagName="Admin Fee"
										value={PaymentMethod[selectedEwallet].fee}
									/>
									<PaymentListDetail
										tagName="Grand Total"
										value={
											formDataState.ticketCategoryData.price *
												Number(formDataState.qty) +
											((Number(formDataState.tax) / 100) *
												Number(formDataState.ticketCategoryData.price) +
												PaymentMethod[selectedEwallet].fee -
												(formDataState.voucher !== "" ? 1000 : 0))
										}
									/>
								</div>
							</div>
						) : (
							<LoaderDetailPembayaran />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentPage;
