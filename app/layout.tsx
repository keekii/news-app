import React from "react";
import Header from "../components/header";
import Provider from "../components/provider";
import "../styles/globals.css";

type Props = {
	children: React.ReactNode;
};

function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<head />
			<body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
				<Provider>
					<Header />
					<div className="max-w-6xl mx-auto">{children}</div>
				</Provider>
			</body>
		</html>
	);
}

export default RootLayout;
