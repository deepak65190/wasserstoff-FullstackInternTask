import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import "../App.css"
import {
  Chart as chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
chartjs.register(
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement
);

function AnaDonut() {
  const [state, setState] = useState([]);
  const [sector, setSector] = useState("");

  let uaIn = 0;
  let uaRelevence = 0;
  let uaLivelyH = 0;

  let inIn = 0;
  let inRelevence = 0;
  let inLivelyH = 0;

  let ruIn = 0;
  let ruRelevence = 0;
  let ruLivelyH = 0;

  let saIn = 0;
  let saRelevence = 0;
  let saLivelyH = 0;

  let egIn = 0;
  let egRelevence = 0;
  let egLivelyH = 0;

  let chIn = 0;
  let chRelevence = 0;
  let chLivelyH = 0;

  let iraqIn = 0;
  let iraqRelevence = 0;
  let iraqLivelyH = 0;

  let iranIn = 0;
  let iranRelevence = 0;
  let iranLivelyH = 0;

  let caIn = 0;
  let caRelevence = 0;
  let caLivelyH = 0;

  let ukIn = 0;
  let ukRelevence = 0;
  let ukLivelyH = 0;

  for (let i = 0; i < state.length; i++) {
    if (state[i].country === "United States of America") {
      uaIn += state[i].intensity;
      uaRelevence += state[i].relevance;
      uaLivelyH += state[i].likelihood;
    } else if (state[i].country === "India") {
      inIn += state[i].intensity;
      inRelevence += state[i].relevance;
      inLivelyH += state[i].likelihood;
    } else if (state[i].country === "Russia") {
      ruIn += state[i].intensity;
      ruRelevence += state[i].relevance;
      ruLivelyH += state[i].likelihood;
    } else if (state[i].country === "Saudi Arabia") {
      saIn += state[i].intensity;
      saRelevence += state[i].relevance;
      saLivelyH += state[i].likelihood;
    } else if (state[i].country === "Egypt") {
      egIn += state[i].intensity;
      egRelevence += state[i].relevance;
      egLivelyH += state[i].likelihood;
    } else if (state[i].country === "China") {
      chIn += state[i].intensity;
      chRelevence += state[i].relevance;
      chLivelyH += state[i].likelihood;
    } else if (state[i].country === "Iraq") {
      iraqIn += state[i].intensity;
      iraqRelevence += state[i].relevance;
      iraqLivelyH += state[i].likelihood;
    } else if (state[i].country === "Iran") {
      iranIn += state[i].intensity;
      iranRelevence += state[i].relevance;
      iranLivelyH += state[i].likelihood;
    } else if (state[i].country === "Canada") {
      caIn += state[i].intensity;
      caRelevence += state[i].relevance;
      caLivelyH += state[i].likelihood;
    } else if (state[i].country === "United Kingdom") {
      ukIn += state[i].intensity;
      ukRelevence += state[i].relevance;
      ukLivelyH += state[i].likelihood;
    }
  }

  const handleChange = (e) => {
    setSector(e.target.value);
  };

  let url = "http://localhost:8080/get";
  if (sector === "Energy") {
    url = "http://localhost:8080/get?sector=Energy";
  } else if (sector === "Environment") {
    url = "http://localhost:8080/get?sector=Environment";
  } else if (sector === "Manufacturing") {
    url = "http://localhost:8080/get?sector=Manufacturing";
  } else if (sector === "Retail") {
    url = "http://localhost:8080/get?sector=Retail";
  } else if (sector === "Government") {
    url = "http://localhost:8080/get?sector=Government";
  }

  useEffect(() => {
    axios.get(url).then((res) => {
      setState(res.data);
    });
  }, [url]);

  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "left",
      },
      title: {
        display: true,
        text: "Dashboard",
      },
    },
  };

  const labels = [
    "United States of America",
    "Russia",
    "India",
    "Saudi Arabia",
    "Egypt",
    "China",
    "United Kingdom",
    "Iraq",
    "Iran",
    "Canada",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Intensity",
        data: [uaIn, ruIn, inIn, saIn, egIn, chIn, ukIn, iraqIn, iranIn, caIn],
        borderColor: "rgb(73,52,32)",
        backgroundColor: [
          "teal",
          "rgb(0,54,160)",
          "rgb(51,137,221)",
          "rgb(0,105,51)",
          "rgb(200,16,37)",
          "rgb(215,39,15)",
          "rgb(1,32,102)",
          "rgb(110,104,101)",
          "orange",
          "rgb(247,209,0)",
        ],
        color: "teal",
      },
      {
        label: "Likelihood",
        data: [
          uaLivelyH,
          ruLivelyH,
          inLivelyH,
          saLivelyH,
          egLivelyH,
          chLivelyH,
          ukLivelyH,
          iraqLivelyH,
          iranLivelyH,
          caLivelyH,
        ],
        borderColor: "rgb(73,52,32)",
        backgroundColor: [
          "teal",
          "rgb(0,54,160)",
          "rgb(51,137,221)",
          "rgb(0,105,51)",
          "rgb(200,16,37)",
          "rgb(215,39,15)",
          "rgb(1,32,102)",
          "rgb(110,104,101)",
          "orange",
          "rgb(247,209,0)",
        ],
        color: "teal",
      },
      {
        label: "Relevance",
        data: [
          uaRelevence,
          ruRelevence,
          inRelevence,
          saRelevence,
          egRelevence,
          chRelevence,
          ukRelevence,
          iraqRelevence,
          iranRelevence,
          caRelevence,
        ],
        borderColor: "rgb(73,52,32)",
        backgroundColor: [
          "teal",
          "rgb(0,54,160)",
          "rgb(51,137,221)",
          "rgb(0,105,51)",
          "rgb(200,16,37)",
          "rgb(215,39,15)",
          "rgb(1,32,102)",
          "rgb(110,104,101)",
          "orange",
          "rgb(247,209,0)",
        ],
        color: "teal",
      },
    ],
  };

  return (
    <div>
      <select className="sector-select" value={sector} onChange={handleChange}>
        <option value="">
          Sector wise intensity, relevance, and likelihood
        </option>
        <option value="Energy">Energy</option>
        <option value="Environment">Environment</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Retail">Retail</option>
        <option value="Government">Government</option>
      </select>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default AnaDonut;
