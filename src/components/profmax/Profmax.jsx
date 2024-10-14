import React from "react";
import Project from "../project/Project";
import ProjectItem from "../project/ProjectItem/ProjectItem"
import promo from "../../images/profmax/Frame 74.webp"
import msh from "../../images/profmax/МШ.webp"
import cart from "../../images/profmax/Подготовить макет по письму с подтверждением заказа.webp"
import gif1 from "../../images/profmax/arrow_1-ezgif.com-video-to-gif-converter.gif"
import gif2 from "../../images/profmax/green_new.gif"

import Portfolio from "../main/portfolio/Portfolio";
import Footer from "../footer/Footer";
import ProjectCarousel from "../project/ProjectCarousel/ProjectCarousel";

function Profmax() {
    const projectData = {
        title: "profmax",
        client: "интернет магазин одежды и обуви",
        soft: "figma, after effects",
        tasks: "дизайн емейл коммуникаций, баннеры"
    };

    return (
        <div>
            <Project {...projectData} />
            <div className="project__content"> 
            <ProjectItem text="анимированные баннеры" images={[gif1, gif2]} />
                <ProjectCarousel text="мастер-шаблон емейл рассылок + транзакционное письмо" images={[msh, cart]} />
                <ProjectItem text="промо письмо" images={[promo]} />
            </div>
            <Portfolio />
            <Footer />
        </div>
    );
}

export default Profmax;