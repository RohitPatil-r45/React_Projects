import React from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [markdown, SetMarkdown] = React.useState(
    "## Markdown Page - Check Markdown online and type here"
  );
  return (
    <main>
      <div>
        <textarea
          value={markdown}
          onChange={(e) => {
            SetMarkdown(e.target.value);
          }}
          className="mark"
        />
      </div>
      <article>
        <ReactMarkdown className="mark">{markdown}</ReactMarkdown>
      </article>
    </main>
  );
}

export default App;
