import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import MainPage from "./MainPage.js";
import Footer from "./Footer.js";
import FinishedProjects from "./FinishedProjects.js";
import Links from "./Links.js";
import './index.css';
import { Element } from 'react-scroll';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Element id='NavBar'>
          <NavBar />
        </Element>
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="finished-projects/" element={<FinishedProjects />} />
            <Route path="links/" element={<Links />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};
