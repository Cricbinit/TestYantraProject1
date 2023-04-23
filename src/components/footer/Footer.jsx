import React from "react";
import Style6 from "./footer.module.css";
import image1 from "../footer/images1/images/ty_global_1-1-160x160.png";
import { Link } from "react-router-dom";
import Industries from "./../../general/Industries";

const Footer = () => {
  return (
    <>
      {" "}
      <section className={Style6.footer}>
        <article className={Style6.footerArticle}>
          <main className={Style6.mainfooter}>
            <div id={Style6.part1}>
              <div className={Style6.subscribe}>
                <h1>Subscriber to our Newsletter</h1>
              </div>
              <div className={Style6.searchbtn}>
                <div>
                  <input type="text" placeholder="Your email" />
                  <button className={Style6.btn2}>Subscribe</button>
                </div>
              </div>
            </div>
            {/* second div */}
            <div id={Style6.part2}>
              <div className={Style6.part2div}>
                <div className={Style6.part2img}>
                  <figure>
                    <img src={image1} alt={image1} />
                  </figure>
                </div>
              </div>
              <div className={Style6.part2div}>
                <div className={Style6.homser}>
                  <h4>Home</h4>
                  <ul className={Style6.homserlist}>
                    <li>
                      <Link>About us</Link>
                    </li>
                    <li>
                      <Link>Work with us</Link>
                    </li>
                    <li>
                      <Link>Contact</Link>
                    </li>
                    <li>
                      <Link>Case STudies</Link>
                    </li>
                  </ul>
                </div>
                <div className={Style6.homser}>
                  <h4>Service</h4>
                  <ul className={Style6.homserlist}>
                    <li>
                      <Link>Software Development</Link>
                    </li>
                    <li>
                      <Link>Software Testing</Link>
                    </li>
                    <li>
                      <Link>Elevate-IT training services</Link>
                    </li>
                    <li>
                      <Link>IT consulting</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={Style6.part2div}>
                <div className={Style6.industries}>
                  <h4>Industries</h4>
                  <ul className={Style6.induslist}>
                    <li>
                      <Link>Banking & Finance</Link>
                    </li>
                    <li>
                      <Link>Insurance</Link>
                    </li>
                    <li>
                      <Link>Healthcare</Link>
                    </li>
                    <li>
                      <Link>Retail & e-commerce</Link>
                    </li>
                    <li>
                      <Link>Technology and Communication</Link>
                    </li>
                    <li>
                      <Link>Education</Link>
                    </li>
                    <li>
                      <Link>Travel</Link>
                    </li>
                    <li>
                      <Link>Media and Entertainment</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={Style6.part2div}>
                <div className={Style6.connect}>
                  <h4>Connect</h4>
                </div>
                <div className={Style6.connect1}>
                  <div>
                    <ul>
                      <li>
                        <Link>
                          <i class="fa-brands fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <i class="fa-brands fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <i class="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <i class="fa-brands fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={Style6.connect}>
                  <div className={Style6.connect2}>
                    <div>
                      <Link>
                        <i class="fa-solid fa-headphones-simple"></i>
                      </Link>
                    </div>
                    <div>
                      <Link>Ph: +1 888 980 7010</Link>
                    </div>
                  </div>
                </div>
                <div className={Style6.connect}>
                  <div className={Style6.connect3}>
                    <div>
                      <Link>
                        <i class="fa-regular fa-envelope"></i>
                      </Link>
                    </div>
                    <div>
                      <Link>hello@testyantraglobal.com</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </article>
      </section>
      <div className={Style6.lastfooter}>
        <p className={Style6.copyline}>
          ©2022 Test Yantra Global. All rights reserved
        </p>
        <div className={Style6.privacy}>
          <ul>
            <li>
              <a href="https://testyantraglobal.com/privacy-policy/">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://testyantraglobal.com/cookies-policy/">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
