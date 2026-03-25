import React, { useEffect, useMemo, useState } from "react";
import { PostsProvider, usePosts } from "./context/PostContext";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Archive from "./components/Archive/Archive";
import Footer from "./components/Footer/Footer";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);
  const { posts } = usePosts();
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode", isFakeDark);
    },
    [isFakeDark],
  );

  const archiveOptions = useMemo(() => {
    return {
      show: false,
      title: `Post Archive in addition to ${posts.length} main posts`,
    };
  }, [posts.length]);

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <Header />
      <Main />
      <Archive archiveOptions={archiveOptions} />
      <Footer />
    </section>
  );
}

export default App;
