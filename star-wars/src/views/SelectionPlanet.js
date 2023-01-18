import React from "react";
import Header from "/workspace/html-hello/star-wars/src/components/header";
import Navbar from "/workspace/html-hello/star-wars/src/components/navbar";
import Footer from "/workspace/html-hello/star-wars/src/components/Footer";
import LearnMorePlanet from "../components/LearnMorePlanet";

function SelectionPlanet() {
  return (
    <div className="selection">
      <Header />
      <Navbar />
      <LearnMorePlanet />
      <Footer />
    </div>
  );
}

export default SelectionPlanet;
