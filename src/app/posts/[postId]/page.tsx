import Image from "next/image";

import { Article } from "@/components/articles-grid";

type Params = {
  postId: string;
};

export default async function PostDetailPage({ params }: { params: Params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  const article: Article = await response.json();

  return (
    <article className="container mx-auto font-playfair-display py-8 px-4">
      <Image
        src={`https://picsum.photos/seed/${article.id}/800/300`}
        alt={article.title}
        width={800}
        height={300}
        placeholder="blur"
        blurDataURL={`https://picsum.photos/seed/${article.id}/80/40`}
        className="w-full my-4"
      />
      <h2 className="text-clamp font-semibold">{article.title}</h2>
      <p className="text-2xl font-semibold mt-4">
        by <span className="underline">Amir Kedis</span>
      </p>
      <p className="text-2xl mt-4">{article.body}</p>
      <p className="text-2xl mt-4">{article.body}</p>
    </article>
  );
}
