import React from "react";
import { BiRightArrow } from "react-icons/bi";
export type ListQaType = {
	question: string;
	answer: string;
};
type ListQaComponentType = ListQaType & {
	isActive: boolean;
};
const ListQa: React.FC<ListQaComponentType> = ({
	answer,
	question,
	isActive,
}) => {
	return (
		<>
			<button className="w-full flex items-center justify-between bg-blue-800 !text-white py-1.5 rounded-md px-3 text-start">
				<span>{question}</span>
				<i
					className={`${
						isActive ? "rotate-90" : "rotate-0"
					} transition-all duration-150`}
				>
					<BiRightArrow />
				</i>
			</button>
			<p
				className={`bg-slate-100 rounded-md p-3 ${
					isActive ? "block" : "hidden"
				}`}
			>
				{answer}
			</p>
		</>
	);
};

export default ListQa;
