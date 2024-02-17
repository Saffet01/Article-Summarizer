export const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex items-center justify-between flex-row w-full mb-12 pt-5">

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/Saffet01/Article-Summarizer")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">Open AI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};
