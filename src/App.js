import React from "react";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Weather</h1>
      </header>
      <Search />
      <br />
      <footer>
        {" "}
        <a
          className="gitLink"
          href="https://github.com/cjp0421/weather-react"
          alt="View the code on GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to see the code on Github.
        </a>
      </footer>
    </div>
  );
}
