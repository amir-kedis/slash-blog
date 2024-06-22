import ArticlesGrid from "@/components/articles-grid";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Cursor from "@/components/cursor";

export default function Home() {
  return (
    <div>
      <Hero />
      <Nav />
      <ArticlesGrid />
      <Cursor />
    </div>
  );
}
