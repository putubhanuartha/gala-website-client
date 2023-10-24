import React, { ChangeEventHandler } from "react";
export type InputFormProps = {
	idHtml: string;
	placeholder: string;
	labelTitle: string;
	type: "text" | "number" | "email";
	max?: number | undefined;
	min?: number | undefined;
	defaultValue?: number | string | undefined;
	onChange?: (el: React.FormEvent<HTMLInputElement>) => void;
	required?: boolean;
};
const InputForm: React.FC<InputFormProps> = ({
	required,
	idHtml,
	labelTitle,
	placeholder,
	type,
	defaultValue,
	max,
	min,
	onChange,
}) => {
	return (
		<div className="flex flex-1 flex-col gap-y-1">
			<label
				htmlFor={idHtml}
				className="text-slate-700"
			>
				{labelTitle}
			</label>
			<input
				onChange={onChange}
				required={required}
				type={type}
				placeholder={placeholder}
				className="px-3 py-1.5 border-none outline-none rounded-lg transition-all duration-200 focus:shadow-[0px_0px_7px_5px_rgba(46,49,146,0.3)]"
				id={idHtml}
				name={idHtml}
				min={min}
				max={max}
				defaultValue={defaultValue}
			/>
		</div>
	);
};

export default InputForm;
