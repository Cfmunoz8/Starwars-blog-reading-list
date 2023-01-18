import React from "react";
import Header from "/workspace/html-hello/star-wars/src/components/header";
import Navbar from "/workspace/html-hello/star-wars/src/components/navbar";
import Footer from "/workspace/html-hello/star-wars/src/components/Footer";
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
