import React from "react";
import "./GlobalNews.css";
import TopStories from "./TopStoriesComponent/TopStories";
import World from "./WorldComponent/World";
import BusinessComponent from "./BusinessComponent/BusinessComponent";
import HealthComponent from "./HealthComponent/HealthComponent";
import ScienceComponent from "./ScienceComponent/ScienceComponent";

const GlobalNews = () => {
  return (
    <div className="GlobalNewsContainer">
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-topstories-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-topstories"
            type="button"
            role="tab"
            aria-controls="pills-topstories"
            aria-selected="true"
          >
            Top Stories
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-world-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-world"
            type="button"
            role="tab"
            aria-controls="pills-world"
            aria-selected="false"
          >
            World
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-business-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-business"
            type="button"
            role="tab"
            aria-controls="pills-business"
            aria-selected="false"
          >
            Business
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-health-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-health"
            type="button"
            role="tab"
            aria-controls="pills-health"
            aria-selected="false"
          >
            Health
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-science-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-science"
            type="button"
            role="tab"
            aria-controls="pills-science"
            aria-selected="false"
          >
            Science
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-topstories"
          role="tabpanel"
          aria-labelledby="pills-topstories-tab"
        >
          <TopStories />
        </div>
        <div
          className="tab-pane fade"
          id="pills-world"
          role="tabpanel"
          aria-labelledby="pills-world-tab"
        >
          <World />
        </div>
        <div
          className="tab-pane fade"
          id="pills-business"
          role="tabpanel"
          aria-labelledby="pills-business-tab"
        >
          <BusinessComponent />
        </div>
        <div
          className="tab-pane fade"
          id="pills-health"
          role="tabpanel"
          aria-labelledby="pills-health-tab"
        >
          <HealthComponent />
        </div>
        <div
          className="tab-pane fade"
          id="pills-science"
          role="tabpanel"
          aria-labelledby="pills-science-tab"
        >
          <ScienceComponent />
        </div>
      </div>
    </div>
  );
};

export default GlobalNews;
