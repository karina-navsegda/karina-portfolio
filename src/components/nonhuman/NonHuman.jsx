import React from "react";
import Project from "../project/Project";
import ProjectItem from "../project/ProjectItem/ProjectItem"
import cards1 from "../../images/nonhuman/cards01.webp"
import cards2 from "../../images/nonhuman/cards02.webp"
import cards3 from "../../images/nonhuman/cards03.webp"
import cards4 from "../../images/nonhuman/cards04.webp"
import cards5 from "../../images/nonhuman/cards05.webp"
import cards6 from "../../images/nonhuman/cards06.webp"
import timetable from "../../images/nonhuman/timetable01.webp"
import timetable2 from "../../images/nonhuman/timetable02.webp"
import poster1 from "../../images/nonhuman/poster01.webp"
import poster2 from "../../images/nonhuman/poster02.webp"
import page1 from "../../images/nonhuman/бизнес.webp"
import page2 from "../../images/nonhuman/город вовне.webp"
import page3 from "../../images/nonhuman/картина цифрой.webp"
import page4 from "../../images/nonhuman/кризисы цивилизации.webp"


import Portfolio from "../main/portfolio/Portfolio";
import Footer from "../footer/Footer";
import ProjectCarousel from "../project/ProjectCarousel/ProjectCarousel";

function NonHuman() {
    const projectData = {
        title: "(non)human",
        client: "научно-просветительский проект, лекторий",
        soft: "figma",
        tasks: "дизайн сайта, оформление соц сетей"
    };

    return (
        <div>
            <Project {...projectData} />
            <div className="project__content"> 
            <ProjectItem text="карточки для соц. сетей" images={[cards6, cards5, cards4, cards3, cards2, cards1]} />
            <ProjectItem text="расписание лектория" images={[timetable, timetable2]} />
            <ProjectItem text="афиши мероприятий" images={[poster1, poster2]} />
<ProjectCarousel text="страницы продажи курсов для сайта" images={[page1, page2, page3, page4]} />
            </div>
            <Portfolio />
            <Footer />
        </div>
    );
}

export default NonHuman;