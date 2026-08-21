import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/custom/navigation/Navigation";
import Footer from "@/components/custom/footer/Footer";
import StoreProvider from "./StoreProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "avalink | %s",
    default: "avalink",
  },

  description: "A plaform for sharing your social media links",
};

export default function RootLayout({ children }: LayoutProps<"/">) 
{
  
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <StoreProvider>
        <body
          className={`body w-full h-screen flex flex-col`}
        >
          <Navigation />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
