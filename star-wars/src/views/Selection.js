import React from "react";
import Header from "/workspace/html-hello/star-wars/src/components/header";
import Navbar from "/workspace/html-hello/star-wars/src/components/navbar";
import Footer from "/workspace/html-hello/star-wars/src/components/Footer";
import Learn from "../components/learnmore";

function Selection() {
    return (
      <div className="selection">
      <Header />
      <Navbar />
      <Learn />
      <Footer />
      </div>
    );
  }
  
  export default Selection;