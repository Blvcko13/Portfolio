import React from "react";
import { useState } from "react";
  import "./App.css";

function TextFormat() {
  const [text, setText] = useState("Enter Text Here"); //state

  const convertUpperCase = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const convertLowerCase = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const capitalizeEach = (event) => {
    let words = text.split(" ");
    let newText = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  
    setText(newText.join(" "));
  };

  const clearText = (event) => {
    setText("");
  };

  //event listener.
  const handleOnChnage = (event) => {
    setText(event.target.value);
  };

  return (
    <div >
      <div >
        <h1>Enter text to format</h1>
        <div className="m-5">
          <label htmlFor="textArea1" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChnage}
            id="textArea1"
            rows="8"
          ></textarea>
        </div>
        {/* x axis margin 1 */}
        <button className="btn btn-primary mx-1" onClick={convertUpperCase}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={convertLowerCase}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={capitalizeEach}>
          Capitalize 
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear
        </button>
      </div>

      {/* y axis margin 2 */}
      <div className="container my-2">
        <h5>Your Text Summary</h5>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        {/* lets assume 0.08 minutes will take to read 1 word in a text doc. */}
        <p>
          {parseInt(text.split(" ").length) * 0.08} minutes to read above text.
        </p>
      </div>
    </div>
  );
}

export default TextFormat;
