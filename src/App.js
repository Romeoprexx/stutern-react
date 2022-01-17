import { useState, useEffect } from "react";
import "./components/styles.css"


export default function App() {
  const [counts, setCounts] = useState(0);
  const [countsOn, setCountsOn] = useState(false);

  function toggleBtn() {
    setCountsOn(!countsOn);
  }

  useEffect(() => {
    let counter = null;
    if (countsOn) {
      counter = setInterval(() => {
        setCounts(counts => counts + 1);
      }, 1000);
    } else {
      clearInterval(counter);
    }
    return () => clearInterval(counter);
  }, [countsOn]);

  return (
    <div className="App">
      <div className="header">
        <img src="https://logos.textgiraffe.com/logos/logo-name/Romeo-designstyle-colors-m.png" alt="logo" ></img>
      </div>
      <div className="body">
        <div className="body-container">
          <div>
            <button className="count"><h1 >{counts}</h1></button>
          </div>
          <div className="start-stop">
            <button onClick={toggleBtn}>{countsOn}Start</button>
            <button onClick={toggleBtn}>{!countsOn}Stop</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="copy">
          <p className="cp">Copyright &copy; 2022 Deno's Romeo Acuity, Inc. All rights reserved.</p>
        </div>
        <div className="privacy">
          <ul className="unordered">
            <a href="#">Privacy  Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookies Policy</a>
            <a href="#">Disclaimer</a>
          </ul>
        </div>
      </div>
    </div>
  );
}
