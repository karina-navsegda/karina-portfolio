import React from "react";
import Project from "../project/Project";
import ProjectItem from "../project/ProjectItem/ProjectItem"
import start1 from "../../images/pulse/start01.webp"
import start2 from "../../images/pulse/start02.webp"
import final1 from "../../images/pulse/1080х607-1.webp"
import final2 from "../../images/pulse/1080х607-2.webp"
import final3 from "../../images/pulse/1080х607-3.webp"
import final4 from "../../images/pulse/1080х607-4.webp"
import final5 from "../../images/pulse/1080х607-5.webp"
import final6 from "../../images/pulse/1080х607-6.webp"
import final7 from "../../images/pulse/1080х607-7.webp"
import final8 from "../../images/pulse/1080х607-8.webp"
import final9 from "../../images/pulse/1080х607-9.webp"

import Portfolio from "../main/portfolio/Portfolio";
import Footer from "../footer/Footer";

function Pulse() {
    const projectData = {
        title: "pulse",
        client: "страховая компания",
        soft: "figma, midjorney",
        tasks: "редизайн баннеров для таргета"
    };

    return (
        <div>
            <Project {...projectData} />
            <div className="project__content"> 
                <ProjectItem text="старые варинаты баннеров, клиенту надоела шаблонность и стоковые фотографии" images={[start1, start2]} />
                <ProjectItem text="обновленный дизайн баннеров, использовался midjorney для генерации фотографий" images={[final1, final2, final3, final4, final5, final6, final7, final8, final9]} />
            </div>
            <Portfolio />
            <Footer />
        </div>
    );
}

export default Pulse;