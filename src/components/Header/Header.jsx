import React from "react";
import { usePosts } from "../../context/PostContext";
import Results from "../Result/Result";
import SearchPosts from "../SearchPost/SearchPost";

function Header() {
  const { posts, handleClearPosts, searchQuery, setSearchQuery } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <button onClick={handleClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
