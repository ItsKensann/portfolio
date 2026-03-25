import type { Metadata } from "next";
import {
  VT323,
  Share_Tech_Mono,
  JetBrains_Mono,
  Press_Start_2P,
} from "next/font/google";
import "./globals.css";

const vt323 = JetBrains_Mono({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-vt323",
});
const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "itskensan.dev",
  description: "Kensan Putra developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vt323.variable} ${pressStart.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
