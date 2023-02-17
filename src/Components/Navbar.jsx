import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img
          src="Documents/github/oaksworkhub-app/public/logo.png"
          width="30"
          height="30"
          alt=""
        ></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">*</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Connect Groups (CGs)
            </a>
          </li>
        </ul>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="type something..."
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
export default NavBar;
