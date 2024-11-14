import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { clearResults, searchString } from "../../SearchSlice/searchSlice";
import { useDispatch } from "react-redux";
import weather_logo from "../../assets/weather_icon.png";

const Header = () => {
  // A state to maintain the weather status
  const [weather, setWeather] = useState(0);
  const dispatch = useDispatch();

  // A callback function to get the current weather using OpenWeather API
  const getWeather = async () => {
    try {
      // variables are imported from .env file

      await fetch(
        import.meta.env.VITE_APP_WEATHER_URL +
          import.meta.env.VITE_APP_WEATHER_API
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          setWeather(Number(json.main.temp));
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEvent = (e) => {
    if (e === "") {
      dispatch(clearResults());
    } else {
      dispatch(searchString(e));
    }
  };

  useEffect(() => {
    //Initial call to get the weather status while loading the page
    getWeather();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-bgcolor">
        <Link
          className="navbar-brand brandName nav-color"
          to="/"
          style={{ textDecoration: "none" }}
        >
          What's up Cambridge
        </Link>

        <button
          className="navbar-toggler menu-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse row" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div
              className="col-lg-4 col-md-4 col-sm-12 d-flex 
                        align-items-center 
                        justify-content-center"
            >
              <div className="row navbarContent">
                <div className="col-4">
                  <Link
                    to="/"
                    className="nav-item nav-link nav-color"
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </div>
                <div className="col-4">
                  <Link
                    to="/movies"
                    className="nav-item nav-link nav-color"
                    style={{ textDecoration: "none" }}
                  >
                    Movies
                  </Link>
                </div>
                <div className="col-4">
                  <Link
                    to="/links"
                    className="nav-item nav-link nav-color"
                    style={{ textDecoration: "none" }}
                  >
                    Links
                  </Link>
                </div>
              </div>
            </div>

            <div className="searchInput col-lg-4 col-md-8 col-sm-10 ">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here..."
                  onChange={(e) => handleEvent(e.target.value)}
                />
                <div className="input-group-append search">
                  <button id="search_btn" className="btn ">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-12 d-flex 
                        align-items-left 
                        justify-content-center"
            >
              {/* <button className="btn btn-info loginButton">Login</button>
              <button className="btn btn-success signUpButton">Sign Up</button> */}
              <div className="d-flex align-items-center weather">
                <img
                  className="weather_icon"
                  src={weather_logo}
                  alt="weathericon"
                />
                <span className="text-white degrees">{weather}&#176;C</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
