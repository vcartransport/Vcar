import * as path from "path";
import * as fs from "fs";
import matter from "gray-matter";

export async function getAllArticles(pageIndex = 1) {
  const articles = fs.readdirSync(path.join(process.cwd(), "blog"));

  const totalArticles = articles.reduce((allArticles: any[], articleSlug) => {
    // get parsed data from markdown files in the "blog" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), "blog", articleSlug),
      "utf-8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: articleSlug.replace(".mdx", ""),
        published: data.published ? data.published.toString() : "",
      },
      ...allArticles,
    ];
  }, [] as any[]);

  return filterPostsByPageIndex(totalArticles, pageIndex);
}

export const filterPostsByPageIndex = (posts: any[], pageIndex: number) => {
  const postPerPage = 5;
  // get the total posts from page 1 to current page
  const totalPagePosts = +pageIndex * postPerPage;

  // get the total posts from page 1 to previous page
  const prevPagePosts = totalPagePosts - postPerPage;

  return posts.filter(
    (post, index) => index < totalPagePosts && index >= prevPagePosts
  );
};
