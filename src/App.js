import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [meaning, setMeaning] = useState("");
  
  const emojihub = {
    "🚣": "Rowing Boat",
    "🏕️": "Camping",
    "🙈": "See no evil monkey",
    "😉": "Winking Face",
    "🤑": "Money-Mouth Face",
    "🙉": "Hear no evil monkey ",
    "😑": "Expressionless Face",
    "🤥": "Lying Face",
    "🙄": "Face with rolling eyes Face",
    "🙊": "Speak no evil monkey"
  };

  const emojiArray = Object.keys(emojihub);

  const showMeaning = (emoji) => {
    var emojiMeaning = emojihub[emoji];
    setMeaning(emojiMeaning);
  };

  const handleChange = (e) => {
    var inputEmoji = e.target.value;
    var emojiMeaning = emojihub[inputEmoji];
    if (emojiMeaning === undefined) {
      emojiMeaning = "Sorry! could not find it in database.";
    }
    setMeaning(emojiMeaning);
  };

  return (
    <>
      <div className="App">
        <div className="center">
          <div className="emojihub">
            <h1>Emoji Hub</h1>
          </div>
          <br></br>
          <input onChange={handleChange} placeholder="Search Emojipedia" />
          <p style={{ fontSize: "1.5rem" }}>
            <strong>{meaning}</strong>
          </p>
          <h4>Emojis already you know</h4>
          {emojiArray.map((emoji) => {
            return (
              <span
                key={emoji}
                style={{ cursor: "pointer", fontSize: "2.5rem" }}
                onClick={() => showMeaning(emoji)}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
