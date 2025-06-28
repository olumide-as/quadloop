import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: {
    default: "Quadloop – Circular Innovation",
    template: "%s | Quadloop",
  },
  description:
    "Quadloop is a circular electronics company building clean, affordable, and sustainable solar technology from electronic waste in Africa.",
  keywords: [
    "Quadloop",
    "Solar",
    "E-waste",
    "Africa",
    "Renewable Energy",
    "Clean Tech",
    "Sustainability",
    "Circular Economy",
  ],
  authors: [{ name: "Quadloop Team", url: "https://quadloop.africa" }],
  creator: "Quadloop",
  metadataBase: new URL("https://quadloop.africa"),
  openGraph: {
    title: "Quadloop – Circular Innovation",
    description: "Clean energy. Recycled components. Real impact.",
    url: "https://quadloop.africa",
    siteName: "Quadloop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quadloop",
    description: "Revolutionising solar power using e-waste in Africa.",
    site: "@quadloopcreate",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Redundant fallback for older browsers */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}