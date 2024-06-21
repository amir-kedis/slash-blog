import ArticleCard from "./article-card";

export type Article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function ArticlesGrid() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let articles: Article[] = await response.json();
  articles = articles.slice(0, 12);

  return (
    <main className="container mx-auto font-playfair-display py-8 px-4">
      <h2 className="text-2xl mb-4">Latest Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}
