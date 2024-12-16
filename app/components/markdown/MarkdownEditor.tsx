import React, { useState, ChangeEvent } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown-editor">
      <div className="editor">
        <textarea
          placeholder="Write your Markdown here..."
          value={markdown}
          onChange={handleInputChange}
        />
      </div>
      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
