import React from "react";
import Style9 from "./Softtesting.module.css";
import { Link } from "react-router-dom";
import image1 from "../footer/images1/images/asset 2.png";
import image2 from "../footer/images1/images/testyantra_final.jpg";
import Footer from './../footer/Footer';

const SoftwareTesting = () => {
  return (
    <section className={Style9.testingsection}>
      <article className={Style9.testingarticle}>
        <div className={Style9.backimg}>
          <div className={Style9.backContent}>
            <h1>
              SOFTWARE <br /> TESTING
            </h1>
            <p>
              Test Yantra offers a suite of software testing tools, methodology,
              and resources to improve the quality assurance of your
              applications. Our application, automation, performance, and
              security testing services provide the confidence to digitally
              transformation your business.
            </p>
          </div>
        </div>
        <div className={Style9.middlewaveimg}>
          <img src={image1} alt={image1} />
        </div>
        <div className={Style9.middlepart}>
          <div className={Style9.video}></div>
          <div className={Style9.content}>
            <img src={image2} alt={image2} />
            <h1>An overview</h1>
            <p>
              With changing technologies and complex business dynamics,
              companies often face uncertainties that could prove to be an
              obstacle on their path to digital transformation. How can they be
              sure that their applications are giving them the intended ROI? How
              can they validate the performance of an application?
            </p>
            <p>
              If you are one such business owner having a difficult time
              navigating through the complex world of software testing, Test
              Yantra is the answer to all your problems. An entity of Test
              Yantra Global that offers pioneering software services worldwide,
              Test Yantra provides cost-effective and quick quality assurance
              (QA) services. Test Yantra’s ‘Testing as a Service’ helps assess
              the maturity of testing organizations; build Test Competency
              Centres and leverage Global Delivery and other curated engagement
              models. With Test Yantra’s application testing services, companies
              can achieve their quality goals, quickly and effectively.
            </p>
          </div>
        </div>
        <div className={Style9.yantra}>
          <h1>Why Test Yantra?</h1>
          <p>
            Quality and accelerated go-to-market timelines are critical factors
            that determine the success of an application. Our expert team of
            testers, assure quick testing turnaround and optimum customer
            satisfaction.
          </p>
          <p>
            We help you validate your application from an end-user perspective
            quickly and instil greater confidence to launch your application.
            Leverage Test Yantra’s crowd testing experts, explore our test
            automation strategy, or use our game-changing AI, ML-driven,
            scriptless automation tool “Flinko” to make your testing
            organization more comprehensive, efficient, and intelligent.
          </p>
          <p>
            Test Yantra provides software testing services to 1,000+ clients
            across seven industries, from six countries. Connect with Test
            Yantra’s team of expert testers to imrove your quality assurance and
            improve your digital transformation.
          </p>
          <div className={Style9.btnsoft}>
            <Link>
              Learn more about our Software Development{" "}
              <i class="fa-solid fa-circle-arrow-right"></i>
            </Link>
          </div>
              </div>
              <Footer/>
      </article>
    </section>
  );
};

export default SoftwareTesting;
