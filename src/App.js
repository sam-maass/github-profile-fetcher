import React, { useState } from "react";
import { GithubProfile } from "./GithubProfile";
import "./App.css";
import { githubService } from "./githubService";

function App() {
  const [userName, setUserName] = useState("");

  const handleChange = e => setUserName(e.target.value);
  const handleKeyUp = e => e.key === "Enter" && getUserInfo();
  const getUserInfo = () => githubService.getUserInfo(userName);

  return (
    <div className="App">
      <input
        type="text"
        name="userName"
        id="userName"
        value={userName}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <button onClick={getUserInfo}>Load</button>
      <GithubProfile />
    </div>
  );
}

export default App;
