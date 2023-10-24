import Footer from "@/components/footer/foot";
import Header from "@/components/header/header";
import React from "react";

const LineupLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default LineupLayout;
