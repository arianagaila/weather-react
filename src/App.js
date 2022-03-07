import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <p>
        Code by{" "}
        <a href="https://github.com/arianagaila/weather-react">Ariana Gaila </a>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
