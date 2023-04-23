import React from "react";
import { Link } from "react-router-dom";
import Style7 from "./Skills.module.css";
import image1 from "../footer/images1/images/floating_image_04.png";
import image2 from "../footer/images1/images/white_bottom_wave_01.png";
import image3 from "../footer/images1/images/skillrary.jpg";
import Footer from "./../footer/Footer";

const SkillsRary = () => {
  return (
    <>
      <section className={Style7.mysection3}>
        <article className={Style7.myarticle3}>
          <img src={image1} alt={image1} />
          <div className={Style7.paradiv}>
            <h1>SkillsRary</h1>
            <p>
              One stop solution for online learning and assessment, <br />
              tailored to suit every individual’s needs.
            </p>
          </div>
        </article>
      </section>
      <div className={Style7.image2}>
        <img src={image2} alt={image2} id={Style7.image3} />
      </div>
      <div className={Style7.maindiv}>
        <div className={Style7.video}>
          <video src={Style7.video}></video>
        </div>
        <div className={Style7.content}>
          <img src={image3} alt={image3} />
          <p>
            Whether you are a passionate professional with a keen understanding
            of a particular skill that you want to teach the world or a company
            owner looking at polishing the skills of your employees, Skillrary
            is the platform that you are looking for. An online learning and
            assessment platform tailored to suit every individual’s needs,
            Skillrary provides computer-based training and e-learning in a range
            of subjects. It also makes curating and launching a course a quick
            and easy affair.{" "}
          </p>
          <p>
            With courses on varied subjects like design, marketing, business and
            AI, learners can opt for anything that excites them or suits their
            business requirements. Skillrary’s courses also involve a variety of
            multimedia elements, including graphics, audios, videos and web
            links. Be it self-paced or real-time, each course caters to an
            individual’s needs.
          </p>
          <p>
            The platform is also coupled with assessments for you to rate the
            skills of your learners or employees. So far, the trainers of
            Skillrary have conducted over 87,000 lectures; created more than
            99,000 videos and trained over 354,000 students in over 14,000
            courses.
          </p>
          <p>
            Join the community of Skillrary to sharpen your skills and make
            learning a fun and wholesome experience.
          </p>
        </div>
      </div>
      <div className={Style7.readmorebtn}>
        <div className={Style7.btn}>
          <Link to="/">
            SkillRary-Know more <i class="fa-solid fa-circle-arrow-right"></i>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SkillsRary;
