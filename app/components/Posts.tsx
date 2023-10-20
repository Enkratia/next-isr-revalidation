import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

// export const revalidate = 10;

// export function getStaticProps() {
// const res = await fetch("https://.../posts");
// const posts = await res.json();
// return {
//   // props: {
//   //   posts,
//   // },
//   // Next.js will attempt to re-generate the page:
//   // - When a request comes in
//   // - At most once every 10 seconds
//   revalidate: 10, // In seconds
// };
// }

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
