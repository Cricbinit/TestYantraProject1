import React from "react";
import STYLE1 from "./Homestyle.module.css";
import image1 from "../images1/images/floating_image_01.png";
import image2 from "../images1/images/floating_image_02.png";
import image3 from "../images1/images/floating_image_03.png";
import image4 from "../images1/images/floating_image_04.png";
import image5 from "../images1/images/floating_image_05.png";
import image6 from "../images1/images/Wave_grey_bottom_left_shape_01.png"
import HomeMiddle from './HomeMiddle';

const Home = () => {
  return (
    <>
      <div className={STYLE1.myhome}>
        <figure>
          <header>
            <div>
              <h1> Enabling the Digital</h1>
            </div>
            
            <div>
              <h2>Transformation</h2>
            </div>
            <div>
              <span id={STYLE1.myspan}>
                <p>
                  Test Yantra Global provides a range of innovative technology
                </p>
                <p>solutions to digitally transform your organization.</p>
              </span>
            </div>
          </header>
          {/* <img src={image1} alt={image1} id={STYLE1.image1} /> */}
          <img src={image2} alt={image2} id={STYLE1.image2} />
          <img src={image3} alt={image3} id={STYLE1.image3} />
          <img src={image4} alt={image4} id={STYLE1.image4} />
          {/* <img src={image5} alt={image5} id={STYLE1.image5} /> */}
        </figure>
      </div>
      <img src={image6} alt={image6} id={STYLE1.image6} />
      <HomeMiddle/>
    </>
  );
};

export default Home;
