import React from "react";

import "./styles.css";

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Weather</h1>
      </header>
      <Search />
      <br />
      <a
        href="https://github.com/cjp0421/weather-react"
        alt=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to see the code on Github.
      </a>
    </div>
  );
}

export default App;
