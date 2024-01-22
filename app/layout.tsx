import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Munshi Enterprise",
    template: "%s | Munshi Enterprise",
  },
  description: "Farmers' Faith",
};

const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/Helvetica-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvetica-LightOblique.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvetica-Oblique.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvetica-BoldOblique.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
