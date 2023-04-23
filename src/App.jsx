import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutsUs from "./general/AboutsUs";
import Layout from "./components/Layout";
import Services from "./general/Services";
import Products from "./general/Products";
import Industries from "./general/Industries";
import Blog from "./components/Blog";
import SkillsRary from "./components/SkillsRary/SkillsRary";
import SoftwareDevelopment from "./components/SoftwareDevelopment/SoftwareDevelopment";
import SoftwareTesting from "./components/SoftwareTesting/SoftwareTesting";

const App = () => {
  return (
    <section className="mainBlock">
      <article>
        <Router>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Industries" element={<Industries />} />
            <Route path="/Aboutus" element={<AboutsUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/SkillsRary" element={<SkillsRary />} />
            <Route
              path="/SoftwareDevelopment"
              element={<SoftwareDevelopment />}
            />
            <Route path="/SoftwareTesting" element={<SoftwareTesting />} />
          </Routes>
        </Router>
      </article>
    </section>
  );
};

export default App;
