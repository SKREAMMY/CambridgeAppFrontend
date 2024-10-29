import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import GlobalNews from "../../components/GlobalNewsComponent/GlobalNews";
import LocalNews from "../../components/LocalNewsComponent/LocalNews";

const HomePage = () => {
  return (
    <div className="HomePageContainer ">
      <nav className="newsNavBar">
        <div className="nav nav-tabs nav-colors" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#local"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Local News
          </button>
          <button
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#global"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Global News
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="local"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <LocalNews />
        </div>
        <div
          className="tab-pane fade"
          id="global"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <GlobalNews />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
