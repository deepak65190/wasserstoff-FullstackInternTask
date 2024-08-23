import React, { useState, useEffect } from "react";
import axios from "axios";


function Black() {
  let ukregion =[]
  const [state, setState] = useState([]);
  const [seta,setSeta]=useState("")
  for (let i = 0; i < state.length; i++) {
    if (state[i].country === "United Kingdom") {
      ukregion.push(state[i].sector);
      
    }
  }
  // console.log(ukregion, "inee");
 ;
 const handleChange=(e)=>{
setSeta(e.target.value)
 }
 let url = "http://localhost:8080/get";
 if (seta === "Energy"){
  url = "http://localhost:8080/get?sector=Energy";
 }else if (seta === "Environment"){
  url = "http://localhost:8080/get?sector=Environment";
 
 }else if (seta === "Manufacturing"){
  url = "http://localhost:8080/get?sector=Manufacturing";
 }
 else if (seta === "Retail") {
   url = "http://localhost:8080/get?sector=Retail";
 }
 else if (seta === "Government") {
   url = "http://localhost:8080/get?sector=Government";
 }
   useEffect(() => {
     axios.get(url).then((res) => {
      console.log(res.data)
       setState(res.data);
     });
   }, [url]);
  return (
    <>
      <select value={seta} onChange={handleChange}>
        <option value="">up</option>
        <option value="Energy">Energy</option>
        <option value="Environment">Environment</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Retail">Retail</option>
        <option value="Government">Government</option>
      </select>
      {state.length > 0 &&
        state.map((ele) => {
          return <h1>{ele.sector}</h1>;
        })}
    </>
  );
}

export default Black;
