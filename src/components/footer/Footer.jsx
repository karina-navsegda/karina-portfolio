
import gif from "../../images/p1.gif";
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer" id="footer">
          <div className="footer__stroke">
            <p className="footer__title">
                    напишите мне, и мы обязательно будем счастливы!
                </p>
                <div className="footer__mob"> 
                <p className="footer__p-mobile">напишите мне и мы обязательно будем счастливы! поработаем или познакомимся я открыта к проектам, парт-таймам и даже к крутому фултайму обо всём на свете. </p>
                <img
                        className="footer__mob-gif"
                        src={gif}
                        alt="Static content"
                    /> </div>
                <div className="footer__video-container"> 
                <Link to="https://t.me/superkica8bitexe" className="footer__button" target="_blank">написать в тг</Link>

                    <img
                        className="footer__gif"
                        src={gif}
                        alt="Static content"
                    />
                </div>
                </div>
                <div className="footer__stroke">
                <div className="footer__links">
                    <Link to="https://www.behance.net/4c674ac9" className="footer__link" target="_blank">behance</Link>
                    <Link to="mailto:apresmoi@inbox.ru" className="footer__link" target="_blank">apresmoi@inbox.ru</Link>
                </div>
                <div className="footer__column">
              
               <p className="footer__p">буду рада присоединиться к крутой команде<br />в роли веб или ux/iu дизайнера</p> 
                  
                </div>
               
                </div>
            <div className="footer__circle"></div>
        </footer>
    );
}

export default Footer;
