import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Star Wars Wiki",
  description: "Discover the universe of Star Wars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
