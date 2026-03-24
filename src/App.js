import React from "react";
import { usePosts } from "./context/PostContext";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Archive from "./components/Archive/Archive";
import Footer from "./components/Footer/Footer";

function App() {
  const { isFakeDark, setIsFakeDark } = usePosts();

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
      <Archive />
      <Footer />
    </section>
  );
}

export default App;
