import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from "./components/Service";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
