import Image from "next/image";
import Link from "next/link";

import { Article } from "./articles-grid";

import { useCursor } from "@/utils/CursorContext";

export default function ArticleCard({ article }: { article: Article }) {
  const { setCursorScale, setCursorText } = useCursor();

  const handleMouseEnter = () => {
    setCursorText("GO");
    setCursorScale(3);
  };

  const handleMouseLeave = () => {
    setCursorText("");
    setCursorScale(1);
  };

  return (
    <Link
      href={`/posts/${article.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={`https://picsum.photos/seed/${article.id}/400/200`}
        alt={article.title}
        width={400}
        height={200}
        placeholder="blur"
        blurDataURL={`https://picsum.photos/seed/${article.id}/40/20`}
        className="border border-primary-green-50 w-full"
      />
      <h3 className="text-xl font-semibold line-clamp-2 text-text-primary">
        {article.title}
      </h3>
      <p className=" font-crimson-text line-clamp-3 text-text-secondary">
        {article.body}
      </p>
    </Link>
  );
}
