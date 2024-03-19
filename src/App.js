import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Textbox from "./Textbox"
import TeskManager from './TaskManager'
import "./Login.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/textbox" element={<Textbox/>}/>
          <Route path="/taskmanager" element={<TeskManager/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
