import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import bntcover1 from "../../../images/bnt/bntcover1.webp";
import bntcover2 from "../../../images/bnt/bntcover2.webp";
import nhcover1 from "../../../images/nonhuman/nhcover1.webp";
import nhcover2 from "../../../images/nonhuman/nhcover2.webp";
import pulsecover1 from "../../../images/pulse/pulsecover1.webp";
import pulsecover2 from "../../../images/pulse/pulsecover2.webp";
import lvlcover1 from "../../../images/level/lvlcover1.webp";
import lvlcover2 from "../../../images/level/lvlcover2.webp";
import pmcover1 from "../../../images/profmax/pmcover2.webp";
import pmcover2 from "../../../images/profmax/pmcover2-1.webp";

const projects = [
  {
    id: 1,
    normalImage: bntcover1,
    hoverImage: bntcover2,
    name: "benetton",
    description: "email-маркетинг для бренда одежды",
    path: "/benetton" 
  },
  {
    id: 2,
    normalImage: pulsecover1,
    hoverImage: pulsecover2,
    name: "pulse",
    description: "редизайн баннеров для страховой компании",
    path: "/pulse" 
  },
  {
    id: 3,
    normalImage: lvlcover1,
    hoverImage: lvlcover2,
    name: "level",
    description: "email-маркетинг для московского девелопера",
    path: "/level" 
  },
  {
    id: 4,
    normalImage: nhcover1,
    hoverImage: nhcover2,
    name: "(non)human",
    description: "дизайн соц. сетей и сайта для образовательного проекта",
    path: "/nonhuman" 
  },
  {
    id: 5,
    normalImage: pmcover1,
    hoverImage: pmcover2,
    name: "profmax",
    description: "email-маркетинг для бренда одежды",
    path: "/profmax" 
  }
];

function Portfolio() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]); 

  let filteredProjects = projects;

  if (location.pathname !== '/') {
    const currentProjectPath = location.pathname;
    filteredProjects = projects.filter(project => project.path !== currentProjectPath);
    
    filteredProjects = filteredProjects.slice(0, 2);
  }

  return (
    <section className="portfolio" id='portfolio'>
      {location.pathname !== '/' && ( 
        <h2 className="portfolio__heading">далее</h2>
      )}
      <div className="portfolio__grid">
        {filteredProjects.map((project) => {
          const isHovered = hoveredImage === project.id;
          const image = isHovered ? project.hoverImage : project.normalImage;

          return (
            <div
              key={project.id}
              className="portfolio__card"
              onMouseEnter={() => setHoveredImage(project.id)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => navigate(project.path)} 
            >
              <img className="portfolio__img" src={image} alt={project.name} />
              <div className="portfolio__text">
                <h3 className="portfolio__name">{project.name}</h3>
                <p className="portfolio__description">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
