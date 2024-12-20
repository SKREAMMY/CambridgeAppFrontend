import React, { Suspense, lazy, useEffect } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import GlobalNews from "../../components/GlobalNewsComponent/GlobalNews";
import LocalNews from "../../components/LocalNewsComponent/LocalNews";
import { useSelector } from "react-redux";
import SearchedNews from "../../components/SearchedNewsComponent/SearchedNews";

const HomePage = () => {
  return (
    <>
      {<SearchedNews />}

      <div className="HomePageContainer ">
        {
          <>
            <ul className="nav nav-pills m-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-local"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Local News
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-global"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
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
                aria-labelledby="pills-home-tab"
              >
                <LocalNews />
              </div>
              <div
                className="tab-pane fade"
                id="pills-global"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <GlobalNews />
              </div>
            </div>
          </>
        }
      </div>
    </>
  );
};

export default HomePage;
