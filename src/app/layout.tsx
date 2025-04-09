import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: 'swap',
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Fame Tonic App",
  description: "Discover your way to success with Fametonic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${urbanist.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
