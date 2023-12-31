import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/About">About</a>
        </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Link
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/Action">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Another action">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Something else here">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Science">
                    Science
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/Education">
                    Education
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/Sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/General">
                    General
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  
}

export default Navbar;
