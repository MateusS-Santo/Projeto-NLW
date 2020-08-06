import React from "react";
import logoImg from "../../assets/image/logo.svg";
import landingImg from "../../assets/image/landing.svg";
import studyIcon from "../../assets/image/icons/study.svg";
import giveClassesIcon from "../../assets/image/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/image/icons/purple-heart.svg";

import './styles.css'


function Landing() {
  return (
    <div id="landing-page">
      <div id="page-landing-content" className="container">
        <div id="logo-container">
          <img src={logoImg} alt="LogoProffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="button-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a href={giveClassesIcon} className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" />
            Dar aulas
          </a>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas 
          <img src={purpleHeartIcon} 
          alt="Coração roxo"/>
        </span>

      </div>
    </div>
  );
}

export default Landing;
