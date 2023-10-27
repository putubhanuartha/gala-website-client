import Footer from "@/components/footer/foot";
import Header from "@/components/header/header";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default AuthLayout;
