import "./globals.css";
import { Inter } from "next/font/google";

import FontAwesomeScript from "./scripts/FontAwesomeScript";
import GAScript from "./scripts/GAScript";

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
      <FontAwesomeScript />
      <GAScript />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
