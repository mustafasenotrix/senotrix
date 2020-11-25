import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "./images/senotrixlogo.png";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";
import instagram from "./images/instagram.png";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
                <img src={logo} alt="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarresponsive"
            aria-controls="navbarresponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarresponsive">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                 Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <span class="social">
                  <li>
                    <a href="https://www.facebook.com/senotrixltd" target="_blank">
                      <img src={facebook} alt="logo" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/senotrixltd" target="_blank">
                      <img src={twitter} alt="logo" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/senotrixltd/" target="_blank">
                      <img src={linkedin} alt="logo" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/senotrixltd/" target="_blank">
                      <img src={instagram} alt="logo" />
                    </a>
                  </li>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);