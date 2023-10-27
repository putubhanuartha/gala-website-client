"use client"
import React, { useRef } from "react";
import styles from '../auth.module.css'
import { AnimatePresence, motion, useInView } from "framer-motion";
export type AuthPropsType = {
	children: React.ReactNode;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	title: string;
};
const Auth: React.FC<AuthPropsType> = ({ children, handleSubmit, title }) => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref);
	return (
		<div
			ref={ref}
			className="flex min-h-screen primary-color"
		>
			<div className="container m-auto">
				<AnimatePresence>
					{isInView && (
						<motion.form
							onSubmit={handleSubmit}
							action=""
							className={styles.form}
							initial={{ y: -50, opacity: 0 }}
							animate={{ y: 0, opacity: 100 }}
							transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
						>
							<p className="text-center text-2xl font-semibold capitalize">
								{title}
							</p>
							{children}
							<button className="capitalize">{title}</button>
						</motion.form>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Auth;
