import React, { useState } from "react";
import axios from "axios";
import backgroundImage from "../assets/TelcoGpt.png";

export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8020/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
      <div>
          <div class="banner top-banner">
          </div>
          <div className="container container-sm p-1">
              {" "}
              {/*<h1 className="title text-center text-telecomTurquoise">TelecoGPT</h1>*/}
              <img className="background-image" src={backgroundImage} alt="Background" />
              <div className="chatbox" >
                  <div className="bg-telecomTurquoise  mt-2 p-1 border-5">
                      <p className="text-light">
                          {response ? response : "How can I help?"}
                      </p>
                  </div>
                  <form className="form" onSubmit={handleSubmit}>
                      <div className="form-group">
                          <input
                              className="shadow-sm"
                              type="text"
                              placeholder="Enter text"
                              value={prompt}
                              onChange={handlePrompt}
                          />
                      </div>{" "}
                  </form>
              </div>
          </div>
          <div class="banner bottom-banner">
          </div>
      </div>
  );
}