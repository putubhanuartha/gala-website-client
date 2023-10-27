import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { Fragment } from "react";
import { BsFillPersonFill } from "react-icons/bs";
const ButtonMenu = () => {
	return (
		<Menu
			as="div"
			className="relative inline-block text-left"
		>
			<div>
				<Menu.Button className="inline-flex w-full justify-center rounded-[100%] bg-sky-950 px-3 py-3 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
					<BsFillPersonFill size={25} />
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
				<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-1 py-1 ">
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? "bg-violet-500" : "bg-white"
									} group flex w-full items-center rounded-md justify-between px-2 py-2 text-sm`}
								>
									<Link
										href={"/auth/login"}
										className={`${
											active ? " text-white" : "text-gray-900"
										} w-full block font-semibold text-lg tracking-wider`}
									>
										LOGIN
									</Link>
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? "bg-violet-500" : "bg-white"
									} group flex w-full items-center rounded-md justify-between px-2 py-2 text-sm`}
								>
									<Link
										href={"/auth/register"}
										className={`${
											active ? " text-white" : "text-gray-900"
										} w-full block font-semibold text-lg tracking-wider`}
									>
										REGISTER
									</Link>
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? "bg-violet-500" : "bg-white"
									} group flex w-full items-center rounded-md justify-between px-2 py-2 text-sm`}
								>
									<Link
										href={"/payment"}
										className={`${
											active ? " text-white" : "text-gray-900"
										} w-full block font-semibold text-lg tracking-wider`}
									>
										MY PAYMENT
									</Link>
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? "bg-violet-500" : "bg-white"
									} group flex w-full items-center rounded-md justify-between px-2 py-2 text-sm`}
								>
									<Link
										href={"#"}
										className={`${
											active ? " text-white" : "text-gray-900"
										} w-full block font-semibold text-lg tracking-wider`}
									>
										LOGOUT
									</Link>
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default ButtonMenu;
