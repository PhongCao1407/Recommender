import "./Chatbot.css";

import HumanIcon from './static/HumanIcon.svg'
import RobotIcon from './static/RobotIcon.svg'

const Chatbot = () => {
  return (
    <main>
      <div className="chat-window">
        <div className="chat">
          
          <div class="text user-text">
              <div className="text-box">
                <p>Question</p>
              </div>
              <img src={HumanIcon}/>
          </div>
          <div class="text bot-text">
              <img src={RobotIcon}/>
              <div className="text-box">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
          </div>
          <div class="text user-text">
              <div className="text-box">
                <p>Question</p>
              </div>
              <img src={HumanIcon}/>
          </div>
        </div>
        <div className="search-bar">
          <button className="arrow-button"></button>
          <input type="text" placeholder="Type something..."></input>
        </div>
      </div>
    </main>
  );
};

export { Chatbot };
