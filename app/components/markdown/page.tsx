import Head from "next/head";
import MarkdownEditor from "./MarkdownEditor";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Markdown Editor</title>
        <meta
          name="description"
          content="Create and preview Markdown content with ease."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Markdown Editor</h1>
        <MarkdownEditor />
      </main>

      <footer>
        <p>Powered by NEXT.js and React Markdown</p>
      </footer>
    </div>
  );
};

export default Home;
