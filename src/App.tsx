import React from "react";

import logo from "./assets/images/logo.svg";
import { YourComponent } from "./components";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <YourComponent />
      </header>
    </div>
  );
};

export default App;
