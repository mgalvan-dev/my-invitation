import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elio & Talia - Nuestra Boda",
  description:
    "Te invitamos a celebrar nuestro día especial. Acompáñanos en este momento único.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={geistSans.className}>{children}</body>
    </html>
  );
}
