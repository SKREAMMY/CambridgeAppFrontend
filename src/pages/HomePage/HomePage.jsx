import React from "react";
import "./HomePage.css";
import GlobalNews from "../../components/GlobalNewsComponent/GlobalNews";
import LocalNews from "../../components/LocalNewsComponent/LocalNews";
import SearchedNews from "../../components/SearchedNewsComponent/SearchedNews";

const HomePage = () => {
  return (
    <>
      <SearchedNews />

      <div className="HomePageContainer">
        <ul
          className="nav nav-pills justify-content-center m-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-local-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-local"
              type="button"
              role="tab"
              aria-controls="pills-local"
              aria-selected="true"
            >
              Local News
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-global-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-global"
              type="button"
              role="tab"
              aria-controls="pills-global"
              aria-selected="false"
            >
              Global News
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-local"
            role="tabpanel"
            aria-labelledby="pills-local-tab"
          >
            <LocalNews />
          </div>
          <div
            className="tab-pane fade"
            id="pills-global"
            role="tabpanel"
            aria-labelledby="pills-global-tab"
          >
            <GlobalNews />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
