import React from "react";
import STYLE from "./Topstyle.module.css";
import { Outlet, Link } from "react-router-dom";

const Topicon = () => {
  return (
    <section className={STYLE.mysection}>
      <div id={STYLE.email}>
        <h6>
          <Link to="/">
            <i class="fa-solid fa-envelope"></i>
            hello@testyantraglobal.com
          </Link>
        </h6>
      </div>
      <div id={STYLE.icon}>
        <ul>
          <li>
            <Link to="/https://twitter.com/">
              <i class="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link to="/http://www.linkedin.com/">
              <i class="fa-brands fa-linkedin"></i>
            </Link>
          </li>
          <li>
            <Link to="/http://www.insagram.com/">
              <i class="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="/https://www.facebook.com/">
              <i class="fa-brands fa-facebook"></i>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </section>
  );
};

export default Topicon;
 