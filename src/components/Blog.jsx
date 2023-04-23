import React from "react";
import styleblog from "./blog.module.css";
import { Link } from "react-router-dom";
import image1 from "../images1/images/Automate-Software-Testing-1280x800.jpg";
import Footer from "./footer/Footer";

const Blog = () => {
  return (
    <>
      <section className={styleblog.mysection}>
        <article className={styleblog.myarticle}>
          <div className={styleblog.imgdiv}>
            <img src={image1} alt={image1} className={styleblog.image} />
          </div>
          <div className={styleblog.blogpara}>
            <Link>
              <h4 id={styleblog.testing}>Blogs</h4>
            </Link>
            <ul>
              <li>
                <Link id={styleblog.testing}>Software Testing</Link>
              </li>
              <li>
                <Link>/ Februray 21, 2023 /</Link>
              </li>
              <li>
                <Link id={styleblog.testing}>
                  <i class="fa-regular fa-comment-dots"></i> 0
                </Link>
              </li>
            </ul>
          </div>
          <div className={styleblog.bloglast}>
            <div className={styleblog.heading}>
              <h1>Automated Software testing -101</h1>
            </div>
            <div className={styleblog.paragraph}>
              <p>
                Ever thought about how ‘Automated software testing‘ can benefit
                your business? Here’s a quick primer that you might find useful
                for your software testing evolution. Software testing verifies
                the software functions as intended and meets the requirements
                set out by the customer.
              </p>
            </div>
            <div className={styleblog.readmore}>
              <Link>
                READ MORE <i class="fa-regular fa-circle-right"></i>
              </Link>
            </div>
          </div>
        </article>
      </section>
      <div className={styleblog.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
