import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import LearnMoreCharacter from "../components/LearnMoreCharacter";

function SelectionCharacter() {
  return (
    <div className="selection">
      <Header />
      <Navbar />
      <LearnMoreCharacter />
      <Footer />
    </div>
  );
}

export default SelectionCharacter;
