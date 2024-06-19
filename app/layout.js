import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.JS Practice",
  description: "First Next.JS Project - Smilga tutuorial https://github.com/john-smilga/nextjs-course-openai",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="autumn"lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="px-8 py-20 max-w-8xl mx-auto" id="appDefaultLayout">
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
