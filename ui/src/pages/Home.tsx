import React from "react";
import NavigationBar from "../components/NavigationBar";
import Certification from "../components/Certification";
import DVDS from "../components/DVDS";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Certification />
      <DVDS />
    </div>
  );
};

export default Home;
