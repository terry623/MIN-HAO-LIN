import "./globals.css";
import { Inter } from "next/font/google";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MIN HAO LIN",
  description: "A personal website of Min Hao Lin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/32b3d98784.js"></Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
