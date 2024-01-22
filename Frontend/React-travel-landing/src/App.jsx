import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/layouts/Navbar/NavBar";
import Header from "./components/layouts/Header/Header";
import Section2 from "./components/layouts/Section-2/Section2";
import Section3 from "./components/layouts/Section-3/Section3";
import Section4 from "./components/layouts/Section-4/Section4";
import Section5 from "./components/layouts/Section-5/Section5";
import Footer from "./components/layouts/Footer/Footer";
import Section6 from "./components/layouts/Section-6/Section6";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Header />
      <main>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </main>
    </div>
  );
}

export default App;
