import { GithubProfile } from "./GithubProfile";
import React from "react";
import "./App.css";
import { githubService } from "./githubService";

function App() {
  return (
    <div className="App">
      <input type="text" name="userName" id="userName" />
      <button onClick={githubService.getUserInfo}>Load</button>
      <GithubProfile />
    </div>
  );
}

export default App;
