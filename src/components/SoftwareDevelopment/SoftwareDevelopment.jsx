import React from "react";
import { Link } from "react-router-dom";
import Style8 from "./SoftwareDev.module.css";
import image1 from "../footer/images1/images/asset 2.png";
import image2 from "../footer/images1/images/asset 5.jpeg";
import image3 from "../footer/images1/images/asset 6.jpeg";
import image4 from "../footer/images1/images/asset 9.jpeg";
import Footer from "../footer/Footer";
const SoftwareDevelopment = () => {
  return (
    <section className={Style8.section}>
      <article className={Style8.article}>
        <div className={Style8.maindiv}>
          <h1>
            SOFTWARE <br /> DEVELOPMENT
          </h1>
          <p>
            Our team of Software Design and Development <br /> Engineers provide
            a variety of solutions that elevate your <br /> business to the next
            level.
          </p>
        </div>
      </article>
      <div className={Style8.middleimg}>
        <img src={image1} alt={image1} />
      </div>
      <div className={Style8.videosection}>
        <div className={Style8.video}></div>
        <div className={Style8.contentvideo}>
          <img src={image2} alt={image2} />
          <h1>An overview</h1>
          <p>
            What is it like for companies to navigate through the complex world
            of Information Technology? In this ever-growing world of cloud,
            artificial intelligence, IoT (Internet of Things) and big data,
            businesses need to choose the right IT solutions, which may be a
            challenge considering the galloping technological advancements.
          </p>
          <p>
            Test Yantra Design and Software Development team, ‘Technoelevate’,
            as the name signifies, is all about digital solutions that elevate
            businesses to the next level. The skilled team of Technoelevate
            combines the three Ds – design, development and deployment – to
            provide quality, cost-efficient and timely services to the clients.
            It also delivers IT solutions in a wide variety of verticals and has
            worked with onshore, offshore and mixed delivery models.
          </p>
        </div>
      </div>
      <div className={Style8.middlepart2}>
        <div className={Style8.expertise}>
          <h1>Our expertise</h1>
          <strong>
            <p>‘Teamwork makes the dream work’</p>
          </strong>
          <p>
            With close to two decades of experiance, TechnoElevate has industry
            leading talent and best-in-class global expertise to deliver
            high-end Software Design and Development to Digitally Transform your
            business in the following categories.
          </p>
          <div className={Style8.list}>
            <div className={Style8.liststyle}>
              <ul>
                <div className={Style8.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Software development</li>
                  </div>
                </div>

                <div className={Style8.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Mobile app development</li>
                  </div>
                </div>
                <div className={Style8.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Web development</li>
                  </div>
                </div>

                <div className={Style8.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Cloud solutions</li>
                  </div>
                </div>

                <div className={Style8.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Migration and reengineering</li>
                  </div>
                </div>

                <div className={Style8.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Middleware integration services</li>
                  </div>
                </div>

                <div className={Style8.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>E-commerce development</li>
                  </div>
                </div>

                <div className={Style8.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Full stack development</li>
                  </div>
                </div>
                <div className={Style8.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Data science</li>
                  </div>
                </div>
                <div className={Style8.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>IT Consulting</li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className={Style8.expertiseright}>
          <div className={Style8.expertiserightimg}>
            <img src={image3} alt={image3} />
          </div>
        </div>
      </div>

      <div className={Style8.middlepart3}>
        <div className={Style8.technoelevateimg}>
          <img src={image4} alt={image4} />
        </div>

        <div className={Style8.techContent}>
          <h1>Why Technoelevate?</h1>
          <p>
            We develop, formulate and execute a clear and strategic IT roadmap
            to help you reach your business goals. We also work hand-in-hand
            with your team to understand your requirements, business processes
            and current technical capabilities. We listen, collaborate, operate
            and deliver – all of this with high efficiency and
            cost-effectiveness
          </p>
          <div className={Style8.btnsoft}>
            <Link>
              Learn more about our Software Development{" "}
              <i class="fa-solid fa-circle-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SoftwareDevelopment;
