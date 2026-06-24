import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: "CozyPaws | Premium pet essentials",
  description: "CozyPaws premium pet ecommerce pages with working navigation, product discovery, delivery details, and pet care stories."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <PageTransition>
          <main className="page-wrap">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}