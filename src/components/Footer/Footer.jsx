/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from "@emotion/react";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
      <div className="leftBlock d-flex flex-column flex-lg-row align-items-center">
        <div className="logo">
          <a href="/">
            <img src="img/shared/logo.svg" alt="coffeeroasters logo" />
          </a>
        </div>
        <ul className="d-flex justify-content-end flex-column flex-sm-row">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About us</Link>
          </li>
          <li className="nav-link">
            <Link to="/plan">Create your plan</Link>
          </li>
        </ul>
      </div>

      <div className="logos">
        <div className="hover-logo">
          <img src="img/shared/icon-facebook.svg" alt="facebook logo" />
          <img src="img/shared/icon-facebook-hover.svg" alt="facebook hover logo" />
        </div>
        <div className="hover-logo">
          <img src="img/shared/icon-twitter.svg" alt="twitter logo" />
          <img src="img/shared/icon-twitter-hover.svg" alt="twitter hover logo" />
        </div>
        <div className="hover-logo">
          <img src="img/shared/icon-instagram.svg" alt="instagram logo" />
          <img src="img/shared/icon-instagram-hover.svg" alt="instagram hover logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
