import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Providers from "./providers";
import WhatsAppButton from "../../components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robiz Store",
  description: "Created by Shafique Ur Rehman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-myWhite`}>
        <div className="max-w-[90%] mx-auto">
          <Providers>
            <NavBar />
            {children}
            <Footer />
          </Providers>
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
