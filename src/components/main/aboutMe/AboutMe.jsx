import React, { useRef, useState } from "react";
import Header from "../../header/Header";
import video from "../../../images/4897804698602659690.MP4";

function AboutMe() {
  const videoRef = useRef(null);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; 
      videoRef.current.currentTime = 0; 
    }
    setIsEnlarged(!isEnlarged);
  };

  return (
    <section className="me" id="me">
      <Header />
      <div className="me__container">
        <div className="me__circle-p">
          <div className="me__animation">
            <video 
              ref={videoRef} 
              className={`me__video ${isEnlarged ? 'enlarged' : ''}`} 
              muted 
              onClick={handleVideoClick} 
              autoPlay
              loop
            >
              <source src={video} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
            <div className="me__circle"></div>
          </div>
          <p className="me__p">этот сайт задизайнен, сверстан и разработан полностью мной</p>
        </div>
        <h2 className="me__title">привет!<br/>я веб-дизайнер<br/>из казани</h2>
      </div>
    </section>
  );
}

export default AboutMe;
