import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./App/About/About";
import Contact from "./App/Contact/Contact";
import Home from "./App/Home/Home";
import Jobs from "./App/Jobs/Jobs";
import Login from "./App/Login/Login";
import image from "./App/Home/img/back.jpeg";


const HOC = ({ Component }) => {

  return (
    <div div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', height: "1000%" }}>
      <Component />
    </div >
  )
}

const App = () => {
  return (
    <Routes>

      <Route exact path="/home" element={<HOC Component={Home} />} />
      <Route exact path="/" element={<HOC Component={Login} />} />
      <Route exact path="/about" element={<HOC Component={About} />} />
      <Route exact path="/contact" element={<HOC Component={Contact} />} />
      <Route exact path="/jobs" element={<HOC Component={Jobs} />} />
    </Routes>
  );
};

export default App;
