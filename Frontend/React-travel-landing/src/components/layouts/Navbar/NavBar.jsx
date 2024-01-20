import React from "react";
import Logo from "../../../../public/images/Logo.png";

const NavBar = () => {
  return (
    <nav
      className="container-xxl navbar navbar-expand-lg sticky-top"
      style={{ height: "10vh", background: "#fefcfb" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header justify-content-end">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Destination
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tour
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
            <ul
              className="d-flex m-0 p-0 justify-content-end gap-2"
              style={{ width: "160px" }}
            >
              <button className="btn btn-outline-dark" type="submit">
                Login
              </button>
              <button className="btn btn-outline-dark" type="submit">
                Sign Up
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
