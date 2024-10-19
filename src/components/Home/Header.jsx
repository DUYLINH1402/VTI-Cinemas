import logo2 from "./../../assets/icon/logo2.png";
import home from "./../../assets/icon/home.svg";
import movies from "./../../assets/icon/movies.svg";
import map from "./../../assets/icon/map.svg";
import events from "./../../assets/icon/events.svg";
import contact from "./../../assets/icon/contact.svg";
import search from "./../../assets/icon/search.svg";
import "./header.scss";
import { Outlet, Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-content">
          <div className="header" id="header">
            {/* header-left */}
            <div className="header-left">
              <Link to="/">
                <img className="header-logo" src={logo2} alt="logo" />
              </Link>
              <p className="title">VTI Cinemas</p>
            </div>
            {/* header-right */}
            <div className="header-right">
              <div class="login-actions">
                <Link to="#!" class="action-link">
                  Sign in
                </Link>
                <Link to="#!" class="btn action-btn">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          <div className="search">
            <input type="text" className="input-search" placeholder="Search" />
            <img src={search} alt="Search" className="search-icon" />
          </div>
        </div>
      </div>

      <div className="sidebar">
        <div>
          {/* Navigation */}
          <div className="side-menu">
            <ul>
              <li>
                <Link id="home" to="/">
                  <img src={home} alt="Icon" className="menu-icon" />
                  Home
                </Link>
              </li>
              <li>
                <Link id="movies" to="/movies">
                  <img src={movies} alt="Icon" className="menu-icon" />
                  Movies
                </Link>
              </li>
              <li>
                <Link id="cinemas" to="/cinemas">
                  <img src={map} alt="Icon" className="menu-icon" />
                  Cinemas
                </Link>
              </li>
              <li>
                <Link id="events" to="/events">
                  <img src={events} alt="Icon" className="menu-icon" />
                  Events
                </Link>
              </li>
              <li>
                <Link id="contact" to="/contact">
                  <img src={contact} alt="Icon" className="menu-icon" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="detail">
        {/* Outlet sẽ hiển thị ra children bên phần routerHome*/}
        <Outlet />
      </div>
    </>
  );
};
