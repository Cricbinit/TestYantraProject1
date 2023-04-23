import STYLE2 from "./Homemiddle.module.css";
import image1 from "../images1/images/portfolio_01-1280x960.jpg";
import image2 from "../images1/images/training_01-1280x960.jpg";
import image3 from "../images1/images/post_07-1280x960.jpg";
import image4 from "../images1/images/consulting-1280x960.jpg";
import image5 from "../images1/images/white_bottom_wave_01.png";
import video1 from "../video/videoplayback.mp4";
import image6 from "../images1/images/01-160x160.jpg";
import image7 from "../images1/images/02-160x160.jpg";
import image8 from "../images1/images/03-160x160.jpg";
import image9 from "../images1/images/04-160x160.jpg";
import image10 from "../images1/images/floating_image_04.png";
import React from "react";
import { Link } from "react-router-dom";
import Articles from "./Articles";


const HomeMiddle = () => {
  return (
    <>
      <section className={STYLE2.middlediv}>
        <article>
          <div className={STYLE2.left}>
            <div className={STYLE2.leftid}>
              <h1>Our Services & Industries</h1>
              <p>
                We provide industry-specific services and solutions <br />
                expertise to Global brands across a range of verticals.
              </p>
              <p>
                <span>
                  Some of the industries that we have worked with are :
                </span>
              </p>
            </div>
            {/* icon */}
            <div className={STYLE2.liststyle}>
              <ul>
                <div className={STYLE2.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Banking and Finance</li>
                  </div>
                </div>

                <div className={STYLE2.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Insurance </li>
                  </div>
                </div>
                <div className={STYLE2.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Retail and e-commerce</li>
                  </div>
                </div>

                <div className={STYLE2.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Healthcare</li>
                  </div>
                </div>

                <div className={STYLE2.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Information, Communication, Technology(ICT)</li>
                  </div>
                </div>

                <div className={STYLE2.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Education</li>
                  </div>
                </div>

                <div className={STYLE2.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Travel</li>
                  </div>
                </div>

                <div className={STYLE2.paraicon}>
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div>
                    <li>Media and Entertainment</li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div className={STYLE2.right}>
            <div className={STYLE2.rightid}>
              <div className={STYLE2.rightid1} id={STYLE2.software}>
                <img src={image1} alt={image1} />
                <h1>Software Design & Development</h1>
                <p>
                  We deliver IT solutions in a wide variety of verticals and
                  elevate businesses to the next level
                </p>
                <Link to="/">
                  <i class="fa-solid fa-circle-arrow-right"></i>Learn more
                </Link>
              </div>
              <div className={STYLE2.rightid1} id={STYLE2.elevate}>
                <img src={image2} alt={image2} />
                <h1>Elevate IT-IT Skills Developent</h1>
                <p>
                  Our customized and curated training models help organizations
                  elevate their IT quotient
                </p>
                <Link to="/">
                  <i class="fa-solid fa-circle-arrow-right"></i>Learn more
                </Link>
              </div>
            </div>

            <div className={STYLE2.rightid}>
              <div className={STYLE2.rightid1} id={STYLE2.testing}>
                <img src={image3} alt={image3} />
                <h1>Software Testing</h1>
                <p>
                  We offer cost-effective, reliable and scalable testing
                  services
                </p>
                <Link to="/">
                  <i class="fa-solid fa-circle-arrow-right"></i>Learn more
                </Link>
              </div>
              <div className={STYLE2.rightid1} id={STYLE2.consulting}>
                <img src={image4} alt={image4} />
                <h1>IT Consulting & Managed Services</h1>
                <p>
                  Out team of experts help you craft a winning IT strategy for
                  your organization
                </p>
                <Link to="/">
                  <i class="fa-solid fa-circle-arrow-right"></i>Learn more
                </Link>
              </div>
            </div>
          </div>
        </article>
        <img src={image5} alt={image5} id={STYLE2.sectionimg} />
        <div className={STYLE2.myvid}>
          <div className={STYLE2.myvid1}>
            <div className={STYLE2.youtube}>
              <video src={video1} alt={video1} controls></video>
            </div>
          </div>
          <div className={STYLE2.myvid2}>
            <div className={STYLE2.youtubehead}>
              <h1>At the forefront of innovation</h1>
              <p>
                Test Yantra Global provides industry leading expertise and
                advanced technology solutions to Digitally Transform leading
                brands across various industries. Connect with one of our Expert
                Solutions Specialist to see how Test Yantra can give your
                organization leading edge
              </p>
            </div>
          </div>
        </div>

        <div className={STYLE2.content}>
          <img src={image10} alt={image10} id={STYLE2.img10} />
          <div>
            <h1>
              The numbers speak for <br /> <h2>themselves</h2>
            </h1>
          </div>
          <div className={STYLE2.content1}>
            <div className={STYLE2.activity}>
              <img src={image6} alt={image6} />
              <h1>6</h1>
              <h2>
                Countries & <br /> Growing
              </h2>
            </div>
            <div className={STYLE2.activity}>
              <img src={image7} alt={image7} />
              <h1>3000+</h1>
              <h2>
                Client across <br /> Globe
              </h2>
            </div>
            <div className={STYLE2.activity}>
              <img src={image8} alt={image8} />
              <h1>5000+</h1>
              <h2>
                Team <br /> Members
              </h2>
            </div>
            <div className={STYLE2.activity}>
              <img src={image9} alt={image9} />
              <h1>12000+</h1>
              <h2>
                On Demand <br />
                Engineers
              </h2>
            </div>
          </div>
        </div>
        <div>
          <Articles />
        </div>
      </section>
    </>
  );
};

export default HomeMiddle;
