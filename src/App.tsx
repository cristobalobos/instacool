import React from "react";

import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro text="Texto para intro 1" />
      <Intro text="Texto para intro 2" />
      <Intro />
    </div>
  );
}

export default App;
