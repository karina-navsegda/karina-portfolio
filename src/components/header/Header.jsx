import React from "react";
import { Link, useLocation } from "react-router-dom";
import download from "../../images/download.svg";
import cv from "../../images/Ахметова Карина.pdf";

function Header() {
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`header ${location.pathname !== '/' ? 'header__project' : ''}`}>
      <Link className="header__logo" to="/">
        <p className={`${location.pathname !== '/' ? 'header__logo-p' : 'header__logo'}`}>карина ахметова</p>
      </Link>

      <div className="header__menu">
        <button className="header__link" onClick={() => scrollToSection('portfolio')}>проекты</button>
        <button className="header__link" onClick={() => scrollToSection('footer')}>контакты</button>
        <a href={cv} target="_blank" rel="noopener noreferrer" className="header__main-btn header__link">
          <img className="header__download" src={download} alt="Скачать CV" />
          скачать cv
        </a>
      </div>
    </header>
  );
}

export default Header;
