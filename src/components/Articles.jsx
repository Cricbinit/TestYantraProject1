import React from "react";
import { Link } from "react-router-dom";
import Styles5 from "./Article.module.css";
import image1 from "../images1/images/portfolio_01-1280x960.jpg";
import image2 from "../images1/images/4_salesforce-720x800.jpg";
import image3 from "../images1/images/3_devops-1280x800.jpg";
import image4 from "../images1/images/Wave_grey_bottom_left_shape_01.png";
import Footer from "./footer/Footer";

const Articles = () => {
  return (
    <>
      <section className={Styles5.cardmain2}>
        <div className={Styles5.head}>Articles</div>
        <div className={Styles5.cardhead}>
          <div className={Styles5.carddiv}>
            <img src={image1} alt={image1} />
            <p>February 21, 2023</p>
            <Link to="/" id={Styles5.link}>
              <h1>Automated Software testing-101</h1>
            </Link>
            <Link to="/" id={Styles5.arrow}>
              <i class="fa-solid fa-circle-arrow-right"></i>Learn more
            </Link>
          </div>
          <div className={Styles5.carddiv}>
            <img src={image2} alt={image2} id={Styles5.imggg} />
            <p>March 25, 2022</p>
            <Link to="/" id={Styles5.link}>
              <h1>Salesforce Testing</h1>
            </Link>
            <Link to="/" id={Styles5.arrow}>
              <i class="fa-solid fa-circle-arrow-right"></i>Learn more
            </Link>
          </div>
          <div className={Styles5.carddiv}>
            <img src={image3} alt={image3} />
            <p>March 25, 2022</p>
            <Link to="/" id={Styles5.link}>
              <h1>
                Test Automation and performance Testing for DevOps platform
              </h1>
            </Link>
            <Link to="/" id={Styles5.arrow}>
              <i class="fa-solid fa-circle-arrow-right"></i>Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* start */}
      <div className={Styles5.readmore}>
        <div>
          <button id={Styles5.btn1}>Read more Article</button>
        </div>
      </div>
      {/* end */}

      {/* start */}
      <div className={Styles5.enable}>
        <p>We enable you to digitally transform your business to</p>
        <p id={Styles5.para}>help you create the company of your dreams.</p>
      </div>
      {/* end */}
      <div id={Styles5.image4}>
        <img src={image4} alt={image4} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Articles;
