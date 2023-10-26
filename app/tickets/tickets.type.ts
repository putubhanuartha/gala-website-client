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
export type EwalletType = {
	text: string;
	fee: number;
};
export type FormDataType = {
	fullname: string
	nik: string
	email: string
	phone: string
	qty: string
	voucher: string
	ticketCategoryData: TicketCategoryType
	tax: number
	phonePayment?: number
	ewallet? : EwalletType
}