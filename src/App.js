import React, { useEffect, Fragment } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layouts/SearchBar";
import Logs from "./components/logs/Logs";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
