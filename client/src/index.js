import React from "react";
import ReactDOM from 'react-dom/client';
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h1 style={{fontFamily: 'Ballet', color: 'white' }} >Pushpak Kumar</h1>
      </div>
      <div className="container">
        <h1>
          Blog Posts
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
