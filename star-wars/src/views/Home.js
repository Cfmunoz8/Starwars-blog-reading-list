import React from "react";
import Header from "/workspace/html-hello/star-wars/src/components/header";
import Navbar from "/workspace/html-hello/star-wars/src/components/navbar";
import Footer from "/workspace/html-hello/star-wars/src/components/Footer";
import Characters from "/workspace/html-hello/star-wars/src/components/characters";
import Planets from "/workspace/html-hello/star-wars/src/components/planets";
import Vehicles from "/workspace/html-hello/star-wars/src/components/vehicles";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Navbar />
      <Characters />
      <Planets />
      <Vehicles />
      <Footer />
    </div>
  );
}

export default Home;
