import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import myInfo from "../data/info.json";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Baker",
  description: myInfo.about,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreProvider>
          <NavBar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
