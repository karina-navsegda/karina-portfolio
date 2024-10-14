import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Bnt from "./components/benetton/Bnt";
import Level from "./components/level/Level";
import Pulse from "./components/pulse/Pulse";
import Profmax from "./components/profmax/Profmax";
import NonHuman from "./components/nonhuman/NonHuman";

function App() {
 
  return (
      <div className="page">
        <div className="body">
        <Routes>
          <Route path="/" element={<Main/>} />    
          <Route path="/benetton" element={<Bnt/>} />
          <Route path="/level" element={<Level/>} />
          <Route path="/pulse" element={<Pulse/>} />
          <Route path="/profmax" element={<Profmax/>} />
          <Route path="/nonhuman" element={<NonHuman/>} />
        </Routes>
      </div>
      </div>
  );
}

export default App;
