/* eslint-disable react/button-has-type */
// <reference path="path/types.d.ts" />
import FaSun from "./assests/images/FaSun.png";
import "./App.css";
import { useState } from "react";

const App = () => {

  const [location, setLocation] = useState('London');
  
  
  
  return (
    <div>
      <h3>react-typescript boilerplate!</h3>
      <h5>testing lint stage!!</h5>


      <img src={FaSun} alt="FaSun" />
      

    </div>
  );
};

export default App;
