import { useState } from "react";
import Black from "./components/Black";
import AnaBar from "./components/AnalyticsBar";
import AnaDonut from "./components/AnaDonut";
import "./App.css";
import { controllers } from "chart.js";
function App() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  console.log(toggle);
  return (
    <div className="divAana">
      <h3>Country wise Intencity,Likelihood and Relevence</h3>
      <button className="toggleBtn" onClick={handleToggle}>
        <h3>Toggle</h3>
      </button>
      {toggle?<AnaBar/>:<AnaDonut/>}
      {/* <Black/> */}
    </div>
  );
}

export default App;
