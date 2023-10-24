import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, JSX, SVGProps } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { TicketCategory, TicketCategoryType } from "./page";
export type MenuTicketCategoryProps = {
	setTicketCategory: React.Dispatch<
		React.SetStateAction<TicketCategoryType | null>
	>;
};
const MenuTicketCategory: React.FC<MenuTicketCategoryProps> = ({
	setTicketCategory,
}) => {
	return (
		<Menu
			as="div"
			className="relative inline-block text-left"
		>
			<div>
				<Menu.Button className="inline-flex w-full justify-center rounded-md bg-sky-950 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
					Ticket Category
					<ChevronDownIcon
						className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-1 py-1 ">
						<Menu.Item>
							{({ active }) => (
								<button
									onClick={() => setTicketCategory(TicketCategory.presale1)}
									className={`${
										active ? "bg-violet-500" : "bg-white"
									} group flex w-full items-center rounded-md justify-between px-2 py-2 text-sm`}
								>
									<span
										className={`${active ? " text-white" : "text-gray-900"} `}
									>
										Pre sale 1
									</span>
									<span
										className={`${active ? "text-white" : "text-gray-900"} `}
									>
										@{TicketCategory.presale1.price}
									</span>
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									onClick={() => setTicketCategory(TicketCategory.presale2)}
									className={`${
										active ? "bg-violet-500" : "bg-white"
									} group flex w-full items-center rounded-md justify-between px-2 py-2 text-sm`}
								>
									<span
										className={`${active ? " text-white" : "text-gray-900"} `}
									>
										Pre sale 2
									</span>
									<span
										className={`${active ? "text-white" : "text-gray-900"} `}
									>
										@{TicketCategory.presale2.price}
									</span>
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									onClick={() => setTicketCategory(TicketCategory.vip)}
									className={`${
										active ? "bg-violet-500" : "bg-white"
									} group flex w-full items-center rounded-md justify-between px-2 py-2 text-sm`}
								>
									<span
										className={`${active ? " text-white" : "text-gray-900"} `}
									>
										VIP
									</span>
									<span
										className={`${active ? "text-white" : "text-gray-900"} `}
									>
										@{TicketCategory.vip.price}
									</span>
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

function EditInactiveIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 13V16H7L16 7L13 4L4 13Z"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
		</svg>
	);
}

function EditActiveIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 13V16H7L16 7L13 4L4 13Z"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
		</svg>
	);
}

function DuplicateInactiveIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 4H12V12H4V4Z"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
			<path
				d="M8 8H16V16H8V8Z"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
		</svg>
	);
}

function DuplicateActiveIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 4H12V12H4V4Z"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
			<path
				d="M8 8H16V16H8V8Z"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
		</svg>
	);
}

export default MenuTicketCategory;
