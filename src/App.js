import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes";

import Sidebar from "./layout/Sidebar";
const App = (props) => (
  <div className="App">
    <BrowserRouter>
    <Sidebar />
     <Routing />
    </BrowserRouter>
  </div>
);

export default App;