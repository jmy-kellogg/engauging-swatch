import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "../styles/globals.css";
import SideMenu from "./components/sideMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Engauging Swatch",
  description: "Fiber arts tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <SideMenu />
        {children}
      </body>
    </html>
  );
}
