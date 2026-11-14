import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nearlings — companion intelligence",
  description: "A transparent demonstration of owner-controlled AI companions on NEAR.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
