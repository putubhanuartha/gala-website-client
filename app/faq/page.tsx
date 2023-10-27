"use client"
import React, { useState } from "react";
import styles from "./faq.module.css";
import ListQa from "./component/list-qa";
import { listQa } from "@/data/faqData";
const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(-1);
	return (
		<div
			id={styles.faq}
			className="min-h-screen flex primary-color"
		>
			<div className="container m-auto">
				<div className="mx-auto max-w-4xl flex flex-col items-center bg-white px-5 py-7 rounded-lg">
					<h2 className="text-3xl font-semibold">Questions and Answer</h2>
					<form className="flex w-full justify-center gap-x-2 mt-2">
						<input
							type="text"
							className="max-w-xl rounded-md border-2 border-blue-700 outline-blue-800 focus:shadow-[0px_0px_8px_3px_rgba(29,78,216,0.3)] block w-full px-3 py-2"
							placeholder="Looking for answer .. ??"
						/>
						<button className="bg-blue-700 hover:bg-blue-900 transition-all duration-150 !text-white rounded-lg px-2">
							Search
						</button>
					</form>
					<ul className="mt-5 max-h-[70vh] flex flex-col gap-y-3 overflow-y-scroll w-full px-3">
						{listQa.map((el, index) => {
							return (
								<li
									key={index}
									onClick={() => {
										index === activeIndex
											? setActiveIndex(-1)
											: setActiveIndex(index);
									}}
								>
									<ListQa
										isActive={index === activeIndex}
										answer={el.answer}
										question={el.question}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
