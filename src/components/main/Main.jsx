import React from "react";
import Footer from "../footer/Footer";
import AboutMe from "./aboutMe/AboutMe";
import Portfolio from "./portfolio/Portfolio";


 function Main() {
    return (
        <>
        <main className="main">
            <AboutMe/>
            <section id="portfolio">
  <Portfolio />
</section>
<section id="footer">
 <Footer />
</section>
        </main>
       
        </>
    )
 }

 export default Main;