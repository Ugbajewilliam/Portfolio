import React from "react";
import { FiAward } from "react-icons/fi";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import "./About.css";
import me from "../../assets/me 3.png";

const About = () => {
  return (
    <section id="about">
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="aboutimage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years </small>
            </article>

            <article className="about__card">
              <AiTwotoneFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>5+  </small>
            </article>
          </div>

          <p>
            Hello, my name is <strong>UGBAJE WILLIAM</strong>, and I am a
            passionate frontend engineer and a current student at{" "}
            <strong>AltSchool Africa</strong>. I have a strong interest in
            building visually appealing and user-friendly websites and
            applications. I am constantly seeking new opportunities to learn and
            improve my skills, and have built several projects to prepare myself
            for the competitive job market. I am excited to continue growing as
            a developer and make a meaningful impact in the tech industry.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
