/* eslint-disable react/button-has-type */
// <reference path="path/types.d.ts" />
import FaSun from "./assests/images/FaSun.png";
import "./App.css";
import { useEffect, useState } from "react";
import { Locations } from "./constants";
import AC from "./components/AutoComplete";

const App = () => {

  const [location, setLocation] = useState(Locations[0]);
  
  useEffect(() => {
    console.log("Location changed to:",location)
  },[location])
  
  return (
    <div>
      <AC locSelected={location} onSelectedClick={setLocation} />
    </div>
  );
};

export default App;
