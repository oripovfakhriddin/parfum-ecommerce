import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Children from "../types/children";

import "../../globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PARFUM E-COMMERCE",
  description:
    "Parfumeriya veb ilovasi, ushbu veb ilova Fakhriddin Oripov tomonidan tayyorlangan!",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="uz">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
