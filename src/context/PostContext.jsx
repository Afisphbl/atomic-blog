import React, { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import CreateRandomPost from "../components/CreateRandomPost/CreateRandomPost";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => CreateRandomPost({ faker })),
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = {
    posts,
    handleAddPost,
    handleClearPosts,
    searchQuery,
    searchedPosts,
    setSearchQuery,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostsContext);
};
