import React from "react";
import Logo from "../../../../public/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/clerk-react";

const NavBar = () => {
  const { user } = useUser();
  return (
    <nav
      className="container-xxl navbar navbar-expand-lg sticky-top"
      style={{ height: "10vh", background: "#fefcfb" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Trabook-logo" />
        </Link>
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
            <SignedOut>
              <ul
                className="d-flex m-0 p-0 justify-content-end gap-2"
                style={{ width: "160px" }}
              >
                <SignedOut>
                  <NavLink to="/login">
                    <button className="btn btn-outline-dark">Login</button>
                  </NavLink>

                  <SignOutButton>
                    <button className="btn btn-outline-dark">Sign Up</button>
                  </SignOutButton>
                </SignedOut>
                <SignedIn>
                  <div className="d-flex align-items-center justify-content-end p-2">
                    {user ? (
                      <div className="d-flex align-items-center">
                        <img
                          src={user.imageUrl}
                          alt="avatar"
                          className="rounded-circle me-2"
                          style={{ width: "32px", height: "32px" }}
                        />
                        {user.fullName && typeof user.fullName === "string" && (
                          <span className="me-2">{user.fullName}</span>
                        )}
                      </div>
                    ) : null}
                  </div>
                  <SignOutButton>
                    <button className="btn btn-outline-dark">Sign Out</button>
                  </SignOutButton>
                </SignedIn>
              </ul>
            </SignedOut>
            <SignedIn>
              <ul className="d-flex m-0 p-0 justify-content-center">
                <div className="d-flex align-items-center justify-content-end p-2">
                  {user ? (
                    <div className="d-flex align-items-center">
                      <img
                        src={user.imageUrl}
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={{ width: "32px", height: "32px" }}
                      />
                      {user.fullName && typeof user.fullName === "string" && (
                        <span className="me-2">{user.fullName}</span>
                      )}
                    </div>
                  ) : null}
                </div>
                <SignOutButton afterSignOutUrl="/">
                  <button className="btn signOut-btn">Sign Out</button>
                </SignOutButton>
              </ul>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
