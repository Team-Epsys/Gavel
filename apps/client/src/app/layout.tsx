import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Gavel",
    default: "Gavel",
  },
  description:
    "Gavel: Online auction site for second-hand goods, connecting sellers with buyers for fair-market transactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto max-w-3xl px-3 py-10">{children}</main>
      </body>
    </html>
  );
}
