import React, { useState, useEffect } from "react";

const Home = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = text ? `Editing: ${text.slice(0, 10)}` : "Text Craft";
  }, [text]);

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapitalize = () => {
    let newText = text.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    setText(newText.join(" "));
  };

  const handleReverse = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const handleRemoveWhiteSpaces = () => {
    let newtext = text.replace(/\s+/g, " ").trim();
    setText(newtext);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handlePaste = async () => {
    let newText = await navigator.clipboard.readText();
    setText(newText);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <main className="main">
      <h1 className="heading">Text Craft</h1>
      <textarea
        className="textarea"
        value={text}
        placeholder="Enter Text Here.. "
        rows="4"
        cols="50"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="options">
        <button className="button" onClick={handleUpperCase}>
          UpperCase
        </button>
        <button className="button" onClick={handleLowerCase}>
          LowerCase
        </button>
        <button className="button" onClick={handleCapitalize}>
          Capitalize
        </button>
        <button className="button" onClick={handleReverse}>
          Reverse
        </button>
        <button className="button" onClick={handleRemoveWhiteSpaces}>
          Remove White Spaces
        </button>
        <button className="button" onClick={handleCopy}>
          Copy
        </button>
        <button className="button" onClick={handlePaste}>
          Paste
        </button>
        <button className="button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </main>
  );
};

export default Home;
