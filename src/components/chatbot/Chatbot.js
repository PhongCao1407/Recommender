import "./Chatbot.css";

import HumanIcon from "./static/HumanIcon.svg";
import RobotIcon from "./static/RobotIcon.svg";

import { useState } from "react";

import { OpenAI } from "./OpenAI/openai";

const Chatbot = () => {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  async function handleClick(event) {
    event.preventDefault();
    console.log(textInput);

    const userTextBox = document.getElementsByClassName("user-text")[0];

    if (window.getComputedStyle(userTextBox).opacity === "0") {
      userTextBox.style.opacity = 1;
    }

    const userQuestion = document.getElementById("user-question");
    userQuestion.textContent = `Recommend me a ${textInput}`;

    OpenAI(textInput).then((data) => {
      console.log(data);
      const res = data.result.slice(2, data.result.length);
      console.log(res);

      const botTextBox = document.getElementsByClassName("bot-text")[0];

      if (window.getComputedStyle(botTextBox).opacity === "0") {
        botTextBox.style.opacity = 1;
      }

      const botAnswer = document.getElementById("bot-answer");
      botAnswer.textContent = `${res}`;
    });
  }

  const UserText = () => {
    return (
      <div className="text user-text">
        <div className="text-box">
          <p id="user-question">Question</p>
        </div>
        <img src={HumanIcon} />
      </div>
    );
  };

  const BotText = () => {
    return (
      <div className="text bot-text">
        <img src={RobotIcon} />
        <div className="text-box">
          <p id="bot-answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    );
  };

  return (
    <main>
      <div className="chat-window">
        <div className="chat">
          <UserText />
          <BotText />
        </div>
        <div className="search-bar">
          <button className="arrow-button" onClick={handleClick}></button>
          <input
            type="text"
            placeholder="Recommend me a..."
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
    </main>
  );
};

export { Chatbot };
