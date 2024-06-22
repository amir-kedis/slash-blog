"use client";

import ArticlesGrid from "@/components/articles-grid";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Cursor from "@/components/cursor";

import { CursorProvider } from "@/utils/CursorContext";

export default function Home() {
  return (
    <CursorProvider>
      <div>
        <Hero />
        <Nav />
        <ArticlesGrid />
        <Cursor />
      </div>
    </CursorProvider>
  );
}
