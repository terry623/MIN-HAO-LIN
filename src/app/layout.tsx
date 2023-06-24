import "./globals.css";
import { Inter } from "next/font/google";

import FontAwesomeScript from "./shared/scripts/FontAwesomeScript";
import GAScript from "./shared/scripts/GAScript";
import Footer from "./shared/components/Footer";
import Header from "./shared/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MIN HAO LIN",
  description: "A personal website of MIN HAO LIN.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <FontAwesomeScript />
      <GAScript />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
