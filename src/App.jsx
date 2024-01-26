import "./App.css";
import { marked } from "marked";

import { useState } from "react";

function App() {
  const [text, setText] = useState(`
  # H1

  ## H2

  [title](https://www.example.com)

  \`code\`

  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\` 

  1. First item
  2. Second item
  3. Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  marked.setOptions({
    breaks: true,
  });
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div id="editor-container">
      <div>
        <h3 className="editor-title">Editor</h3>
        <textarea
          id="editor"
          value={text}
          onChange={handleTextChange}
        ></textarea>
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked.parse(text),
        }}
      ></div>
    </div>
  );
}

export default App;
