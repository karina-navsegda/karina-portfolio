import React, { useState } from "react";
import Project from "../project/Project";
import ProjectItem from "../project/ProjectItem/ProjectItem";
import popup from "../../images/bnt/bnt-popup.webp";
import newyear1 from "../../images/bnt/74077 - Загадываем желание на НГ 19.12.webp";
import newyear2 from "../../images/bnt/74084 - Письмо-предсказание 29.12.webp";
import promo1 from "../../images/bnt/promo01.webp";
import promo2 from "../../images/bnt/promo02.webp";
import promo3 from "../../images/bnt/promo03.webp";
import promo4 from "../../images/bnt/promo04.webp";
import promo5 from "../../images/bnt/promo05.webp";

import Portfolio from "../main/portfolio/Portfolio";
import Footer from "../footer/Footer";
import ProjectCarousel from "../project/ProjectCarousel/ProjectCarousel";

function Bnt() {
    const projectData = {
        title: "benetton",
        client: "benetton group — итальянская компания, занимающаяся торговлей одеждой",
        soft: "figma",
        tasks: "дизайн емейл коммуникаций, дизайн поддержка сайта"
    };

    return (
        <div>
            <Project {...projectData} />
            <div className="project__content"> 
                <ProjectItem text="popup для сайта sisley" images={[popup]} />
                <ProjectCarousel text="новогодние промо письма" images={[newyear1, newyear2]} />
                <ProjectCarousel text="промо письма для презентации новых коллекций" images={[promo5, promo4, promo3, promo2, promo1]} />
            </div>
            <Portfolio />
            <Footer />
        </div>
    );
}

export default Bnt;


