import "./App.css";
import Weather from "./Weather";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
        <Weather city="New York" />
      </header>
    </div>
  );
}

export default App;
