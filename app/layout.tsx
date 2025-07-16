import type { Metadata } from "next";
import { Jost ,DM_Sans, Poppins} from "next/font/google";
import Navbar from "@/components/main-nav";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})


const poppins = Poppins({
  variable: "--font-pop-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})



const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "AceUi",
  description: "  Ace your frontend with sleek production-ready components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${jost.variable} ${poppins.variable} antialiased bg-black`}
      >
        <div className="min-h-screen">

          <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
          </div>
          
          <main className="pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
