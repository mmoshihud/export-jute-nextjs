import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munshi Enterprise",
  description: "Farmers' Faith",
};

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
