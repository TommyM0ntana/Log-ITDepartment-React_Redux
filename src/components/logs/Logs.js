import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import M from "materialize-css/dist/js/materialize.min.js";

const Logs = () => {
  //set the state for logs and loading
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);
  //add the setLogs function fetching from the back end
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();

    //setting the new state when it loads to get and give  the data
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h4> Loading...</h4>;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show..</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default Logs;
