import React from "react";
import "../../styles/aboutus.css";
import heroImg from "../../assets/public/aboutHeroImage.png";
import target from "../../assets/public/targget.png";
import camera from "../../assets/public/sweemglasses.png";
import hand from "../../assets/public/hands.png";

const AboutUs = () => {
  const heroDescription = [
    {
      title: "Our Mission",
      text1:
        "To empower learners worldwide with accessible, high-quality, and flexible education.",
      text2:
        "We aim to bridge the gap between knowledge and opportunity by providing an interactive and engaging learning experience for all.",
      img: target,
    },
    {
      title: "Our vision",
      text1:
        "To be the leading e-learning platform transforms the way people learn, nmaking education affordable, personalized, and available anytime, anywhere.",
      text2:
        "We envision a world where anyone can acquire skills, grow professionally, and achieve their dreams through the power of digital learning.",
      img: camera,
    },
    {
      title: "Our core value",
      text1:
        "Accessibility – Education should be within reach for everyone, regardless of location or background",
      text2:
        "Innovation – We embrace technology to create engaging, effective, and modern learning experiences.",
      img: hand,
    },
  ];
  return (
    <main className="aboutUsMain">
      <section className="aboutUsContainer">
        <div className="heroImgContainer">
          <img className="heroImg" src={heroImg} />
        </div>
        <div className="aboutdescription">
          <h1>
            Introduction to <em className="aboutem">Legacy Builders</em>
          </h1>
          <div className="heroline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="144"
              viewBox="0 0 3 144"
              fill="none"
            >
              <path d="M1.5 0V144" stroke="white" stroke-width="2" />
            </svg>
          </div>
          <span>
            Legacy Builders is dedicated to helping students achieve their
            academic goals through, Mock Exams, Past Questions and
            expert guidance.
          </span>
        </div>
        <div className="aboutstatements">
          {heroDescription.map((aboutcard, index) => (
            <div className="aboutcard" key={index}>
              <h1>{aboutcard.title}</h1>
              <div className="innertext">
                <p>{aboutcard.text1}</p>
                <span>{aboutcard.text2}</span>
              </div>
              <div className="statementImg">
                <img className="" src={aboutcard.img} />
              </div>
            </div>
          ))}
        </div>
        <div className="eclipse"></div>
        <div className="aboutthirdsection"></div>
      </section>
    </main>
  );
};

export default AboutUs;
