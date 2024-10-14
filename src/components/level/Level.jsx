import React from "react";
import Project from "../project/Project";
import ProjectItem from "../project/ProjectItem/ProjectItem"
import promo01 from "../../images/level/promolvl01.webp"
import promo02 from "../../images/level/promolvl02.webp"
import popup from "../../images/level/Снимок экрана 2024-10-08 в 12.08.41.webp"
import mail01 from "../../images/level/mail01.webp"
import mail02 from "../../images/level/mail02.webp"

import Portfolio from "../main/portfolio/Portfolio";
import Footer from "../footer/Footer";

function Level() {
    const projectData = {
        title: "level group",
        client: "московский девелопер с проектами бизнес-, комфорт-, премиум-класса",
        soft: "figma, photoshop",
        tasks: "дизайн емейл коммуникаций, дизайн-поддержка сайта"
    };

    return (
        <div>
            <Project {...projectData} />
            <div className="project__content"> 
                <ProjectItem text="popup для сайта" images={[popup]} />
                <ProjectItem text="промо письма" images={[promo01, promo02]} />
                <ProjectItem text="стандартные письма" images={[mail01, mail02]} />

            </div>
            <Portfolio />
            <Footer />
        </div>
    );
}

export default Level;