import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sona Educator | Build and Grow a Profitable Digital Business",
  description:
    "Modern digital marketing and online business education. Courses, products, and resources to help you grow.",
  metadataBase: new URL("https://agentic-e7e7f469.vercel.app"),
  openGraph: {
    title: "Sona Educator",
    description:
      "Modern digital marketing and online business education. Courses, products, and resources to help you grow.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sona Educator",
    description:
      "Modern digital marketing and online business education. Courses, products, and resources to help you grow."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
