import Footer from "@/components/footer/foot";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css";
import AppProvider from "@/provider/AppProvider";
register();
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "GALA 55",
	description: "GALA Concert Application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
