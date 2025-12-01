import type { Metadata } from "next";
import { Geist, Geist_Mono, Spline_Sans } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const splineSans = Spline_Sans({
  subsets: ['latin'],
  variable: '--font-spline-sans',
  weight: ['400', '500', '600', '700'],
});

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Variable.woff2',
      weight: '400 900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: "Ayonaire - Build a Future-Proof Career in Tech",
  description: "Learn tech skills and build your future with Ayonaire's bootcamps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${splineSans.variable} ${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}