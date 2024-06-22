import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const crimsonText = Crimson_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-crimson-text",
});

export const metadata: Metadata = {
  title: "Slash Blog",
  description: "A blog made as a task for slash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfairDisplay.variable + " " + crimsonText.variable}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
