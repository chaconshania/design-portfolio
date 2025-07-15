import React from "react";
import Footer from "/sections/Footer";
import LayoutGrid from "/sections/LayoutGrid";
import Title from "/sections/PageLayout/Title";
import Navbar from "/sections/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Title />

      <LayoutGrid />
      <Footer />
    </div>
  );
}

export default App;
