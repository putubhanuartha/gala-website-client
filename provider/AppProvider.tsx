"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
const AppProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<React.Fragment>
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			{children}
		</React.Fragment>
	);
};

export default AppProvider;
