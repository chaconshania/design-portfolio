import React from "react";
import Footer from "/sections/Footer";
import LayoutGrid from "/sections/LayoutGrid";
import Title from "/sections/PageLayout/Title";
import Navbar from "/sections/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Title
        heading="Hello, I'm Shania!"
        description="Designing, building, and envisioning a world that's intuitive, inspiring, and just a touch magical. "
        className="whitespace-pre-line"
      />
      <LayoutGrid />
      <Footer />
    </div>
  );
}

export default App;
