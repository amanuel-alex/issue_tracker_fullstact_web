import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Navbar"; // Import your Navbar component
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* Render Navbar at the top of the page */}
        <main>{children}</main>{" "}
        {/* Render dynamic page content below the Navbar */}
      </body>
    </html>
  );
}
