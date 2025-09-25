import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary mynavBar ${
        props.mode === "light" ? "light" : "dark"
      }`}
    >
      <div className="container-fluid mynavBar">
        <Link
          className={`navbar-brand mynavBar ${
            props.mode === "light" ? "light" : "dark"
          } headFont`}
          to="/"
          style={{ fontSize: "2rem", fontWeight: "bold" }}
        >
          {props.title}
        </Link>
        <div
          className=" navbar-collapse myStyleForSubtitle"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link
                className={`navbar-brand  ${
                  props.mode === "light" ? "light" : "dark"
                } headFont`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`navbar-brand ${
                  props.mode === "light" ? "light" : "dark"
                } headFont`}
                to="/About"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            onClick={props.toggleMode}
          />
          <label
            className="form-check-label"
            htmlFor="switchCheckDefault"
          >{`Enable ${props.mode === "light" ? "dark" : "light"} mode`}</label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string,
  searchPlaceholder: propTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title",
  aboutText: "Set about text",
  searchPlaceholder: "Search",
};
