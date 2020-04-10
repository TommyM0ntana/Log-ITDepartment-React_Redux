import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return <div className='App'>APP JS</div>;
}

export default App;
