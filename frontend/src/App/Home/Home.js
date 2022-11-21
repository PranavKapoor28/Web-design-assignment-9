import React, { Redirect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import classes from "./Home.module.css";
import "./Home.module.css";
import axios from "axios";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Home = () => {

  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const [message, setmessage] = useState("");

  const change = (e) => {
    const temp = { ...data };
    temp[e.target.name] = e.target.value;
    setdata(temp);
  };

  const submit = async () => {
    try {
      const apiData = await axios.post(
        "http://localhost:8880/user/login",
        data
      );
      setmessage(apiData.data.data.message);
      console.log(apiData.data.data.message)
      console.log(apiData);

    } catch (error) {
      console.log(error.response);
      setmessage(error.response.data.error);
    }
  };



  return (

    <div className={classes}>
      <div className="main">
        <div className="mainInput" style={{ paddingBottom: "  0%" }}>

          <Navbar />
          <PageCard
            title={"Welcome to Pranav Mart"}
            desc={
              "Pranav's Mart is an e-commerce website where users can shop and buy things they crave for at the earliest without any wait."
            }
          />
        </div>
      </div>

      <div className="Heading">
        <h1>Our Items Collection</h1>
        <br></br>
      </div>

      <div className="img-wrapper" style={{ display: "flex", paddingInlineStart: "10%" }}>
        <div><img src="./img/Drone.jpeg" style={{ height: "600px", width: "600px" }} /></div>
        <div><img src="./img/bedsheet.jpeg" style={{ height: "600px", width: "600px" }} /></div>
      </div>
      <div className="img-wrapper" style={{ display: "flex", paddingInlineStart: "10%" }}>
        <div><img src="./img/appliances.jpg" style={{ height: "600px", width: "600px" }} /></div>
        <div><img src="./img/grocerries.jpg" style={{ height: "600px", width: "600px" }} /></div>
      </div>
    </div >
  );
};

export default Home;