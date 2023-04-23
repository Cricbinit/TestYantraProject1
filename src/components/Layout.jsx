import React from "react";
import { Outlet, Link } from "react-router-dom";
import image1 from "../Images/logo_testyantra_global.png";
import Topicon from "./Topicon";

const Layout = () => {
  return (
    <>
      <Topicon />
      <section className="navbar-main">
        <div className="heading">
          <h1 id="testyantra">
            <figure>
              <img src={image1} alt={image1} />
            </figure>
          </h1>
        </div>
        <div className="menudiv">
          <div className="navbar1">
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
          <div className="navbar1">
            <li className="servicesbtn">
              <Link to="/SoftwareDevelopment">Services</Link>
            </li>
            <div className="servicedropdown">
              <div id="servicelist">
                <ul>
                  <p id="para1">
                    <Link to="/SoftwareDevelopment">Software Development</Link>
                  </p>
                  <p>
                    <Link to="/SoftwareTesting">Software Testing</Link>
                  </p>
                  <p>
                    <Link to="#">Elevate-IT training</Link>
                  </p>
                  <p>
                    <a href="#">IT Consulting & Managed Services</a>
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar1">
            <li className="productbtn">
              <Link to="/SkillsRary">Products</Link>
            </li>
            <div className="productdropdown">
              <div id="productlist">
                <ul>
                  <p id="para1">
                    <Link to="/SkillsRary">Software Development</Link>
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar1">
            <li className="indutriesbtn">
              <Link to="/Indutries">Industries</Link>
            </li>
            <div className="indutriesdropdown">
              <div id="indutrieslist">
                <ul>
                  <p id="para1">
                    <a href="#">Banking & Finance</a>
                  </p>
                  <p>
                    <a href="#">Insurance</a>
                  </p>
                  <p>
                    <a href="#">Healthcare</a>
                  </p>
                  <p>
                    <a href="#">Retail & e-commerce</a>
                  </p>
                  <p>
                    <a href="#">Technology & Communication</a>
                  </p>
                  <p>
                    <a href="#">Education</a>
                  </p>
                  <p>
                    <a href="#">Travel</a>
                  </p>
                  <p>
                    <a href="#">Media & Entertainment</a>
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar1">
            <li className="blogsbtn">
              <Link to="/blog">Blogs</Link>
            </li>
            <div className="Blogsdropdown">
              <div id="blogslist">
                {/* <ul>
                <p id="para1">
                  <a href="#">Software Development</a>
                </p>
              </ul> */}
              </div>
            </div>
          </div>
          <div className="navbar1">
            <li className="servicesbtn">
              <Link to="/About">About</Link>
            </li>
            <div className="servicedropdown">
              <div id="servicelist">
                <ul>
                  <p id="para1">
                    <a href="#">Software Development</a>
                  </p>
                  <p>
                    <a href="#">Software Testing</a>
                  </p>
                  <p>
                    <a href="#">Elevate-IT training</a>
                  </p>
                  <p>
                    <a href="#">IT Consulting & Managed Services</a>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
