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