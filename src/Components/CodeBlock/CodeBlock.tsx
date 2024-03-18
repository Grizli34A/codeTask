import React from "react";
import { useState } from "react";
import { useCodeTextStore } from "../../store";
import "./CodeBlock.scss";
const CodeBlock = () => {
  const { text, setText } = useCodeTextStore();
  const lines = text.split("\n");
  return (
    <div className="codeBlock">
      <span className="line-numbers">
        {lines.map((line, index) => (
          <div key={index} className="line-number">
            {index + 1}
          </div>
        ))}
      </span>
      <textarea
        className="editor"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Let's hacking here..."
      />
    </div>
  );
};

export default CodeBlock;
