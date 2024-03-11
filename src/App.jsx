import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [data, setData] = useState("");

  async function fetchInfo() {
    const url = import.meta.env.VITE_APP_API_URL + "/test";
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setResult(json);
  }
  async function fetchdata() {
    const url = import.meta.env.VITE_APP_API_URL + "/getdata";
    const response = await fetch(url);
    const json = await response.json();
    console.log(typeof json);
    setData(json);
  }

  return (
    <div>
      <button onClick={fetchInfo} className="button">
        fetch data
      </button>
      <div className="heading">result: {result}</div>
      <button onClick={fetchdata}>fetch data</button>
      <div className="heading">
        result:{" "}
        {data !== "" && data.map((item, i) => <div key={i}>{item}</div>)}
      </div>
    </div>
  );
}

export default App;
