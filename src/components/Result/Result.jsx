import { usePosts } from "../../context/PostContext";

export default function Results() {
  const { searchedPosts } = usePosts();
  return <p>🚀 {searchedPosts.length} atomic posts found</p>;
}
