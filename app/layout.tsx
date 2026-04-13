import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovaciones Pedagógicas e Internacionalización - ULEAM",
  description: "Proyecto de investigación sobre innovaciones pedagógicas e internacionalización en la ULEAM",
  keywords: ["ULEAM", "innovación pedagógica", "internacionalización", "investigación", "educación"],
  authors: [{ name: "Arturo Rodríguez" }, { name: "Jhonny Villafuerte" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
