import React from "react";
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";
import Section2 from "../Section-2/Section2";
import Section3 from "../Section-3/Section3";
import Section4 from "../Section-4/Section4";
import Section5 from "../Section-5/Section5";
import Section6 from "../Section-6/Section6";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
};

export default Homepage;
