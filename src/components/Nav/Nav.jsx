/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from "@emotion/react";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [visible, setVisible] = useState(0);

  return (
    <React.Fragment>
      <nav className="d-flex flex-row align-items-center justify-content-between">
        <div>
          <a href="/">
            <img src="./img/nav/logo.svg" alt="logo coffeeroasters" />
          </a>
        </div>
        <div className="nav-icon d-block d-sm-none" onClick={() => (visible ? setVisible(0) : setVisible(1))}>
          <img src="./img/nav/icon-hamburger.svg" alt="logo mobile menu" className={visible ? "rotate-270-cw" : "rotate-270-ccw"} />
        </div>
        <ul className="nav d-none d-sm-flex justify-content-end flex-row">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-link">
            <Link to="/plan">Create your plan</Link>
          </li>
        </ul>
      </nav>
      <div
        className={
          visible
            ? "nav-menu d-flex d-sm-none flex-column align-items-center slide-in-top"
            : "nav-menu d-flex d-sm-none flex-column align-items-center slide-out-top"
        }
      >
        <ul>
          <li className="nav-link" onClick={() => setVisible(0)}>
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link" onClick={() => setVisible(0)}>
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-link" onClick={() => setVisible(0)}>
            <Link to="/plan">Create your plan</Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Nav;
