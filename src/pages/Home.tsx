import React from "react";

import logo from "../assets/images/logo.svg";
import "../styles/App.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link className="App-link" to="/example">
          See Routing
        </Link>
      </header>
    </div>
  );
};

export default Home;
