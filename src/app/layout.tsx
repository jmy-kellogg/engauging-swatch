import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  description: "Fiber arts and Crochet tools",
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
        <div className="m-3 w-full">
          <Link
            className="absolute hover:pointer"
            href="/"
            aria-label="Homepage"
          >
            <Image
              aria-hidden
              src="/yarnLineLogo.svg"
              alt="File icon"
              priority={true}
              width={165}
              height={32}
            />
          </Link>
          {children}
        </div>
      </body>
    </html>
  );
}
