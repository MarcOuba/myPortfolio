
import React from "react";
import Nav from './components/nav/Nav.jsx'
import About from './components/about/about'
import Contact from './components/contact/Contact'
import Header from './components/header/header'
import Experience from './components/experience/experience'
import Services from "./components/services/services.jsx";
import Footer from './components/footer/footer.jsx'

import Portfolio from "./components/portfolio/portfolio.jsx";

function App() {
  
  return (
    <>
    <Nav />
    <Header />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
   
    </>
  );
}

export default App;
