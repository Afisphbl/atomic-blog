import { useEffect, useState } from "react";
import { usePosts } from "../../context/PostContext";
import useDebounce from "../Debounce/useDebounce";

export default function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePosts();
  const [query, setQuery] = useState(searchQuery);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
