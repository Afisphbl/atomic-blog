import React, { useEffect, useState } from "react";
import { PostsProvider } from "./context/PostContext";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Archive from "./components/Archive/Archive";
import Footer from "./components/Footer/Footer";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode", isFakeDark);
    },
    [isFakeDark],
  );

  return (
    <PostsProvider>
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>

        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostsProvider>
  );
}

export default App;
