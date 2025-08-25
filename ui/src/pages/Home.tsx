import React from "react";
import NavigationBar from "../components/NavigationBar";
import Certification from "../components/Certification";
import DVDS from "../components/DVDS";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Certification />
      <DVDS />
      <Footer/>
    </div>
  );
};

export default Home;
console.log("Home page loaded");