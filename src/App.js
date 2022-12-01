import React from "react";
import "./App.css";
import Firstsidebar from "./components/Firstsidebar";
import Secondsidebar from "./components/Secondsidebar";
import Thirdsidebar from "./components/ThirdSidebar/Thirdsidebar";

function App() {
  
  return (
    <div className="App">
      <div className="mainSection">
       
          <Firstsidebar 
          li={[
            ["Control"],
            ["Utility"],
            ["Range"],
            ["Autopilot"],
            ["Interior"],
            ["Safety"]
          ]}
          />
       
        <Secondsidebar />
        <Thirdsidebar />
        
      </div>
    </div>
  );
}

export default App;
