"use client";
import Nav from "@/components/nav";
import Cursor from "@/components/cursor";
import { CursorProvider } from "@/utils/CursorContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CursorProvider>
      <Cursor />
      <Nav />
      {children}
    </CursorProvider>
  );
}
