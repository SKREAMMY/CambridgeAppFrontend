import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./science.css";

const ScienceComponent = () => {
  const [science, setScience] = useState([]);

  useEffect(() => {
    async function fetchGlobalHealth() {
      await fetch(import.meta.env.VITE_APP_BASEURL + "news/global/science")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          setScience(json.data);
        });
    }

    fetchGlobalHealth();
  }, []);

  return (
    <div>
      <div className="row localNewsBody">
        <div className="row localNewsList">
          {science.map((news, i) => (
            <div
              className={
                i % 4 === 0
                  ? "col-lg-4 col-md-12 col-sm-12 allLocalNews background-green"
                  : "col-lg-4 col-md-12 col-sm-12 allLocalNews"
              }
              key={i}
            >
              <div className="localNewsImageContainer">
                <div className="row localImageCard">
                  <div className="col-6">
                    <Link to={news?.link} target="_blank">
                      <img
                        src={news?.mediaThumbnail["url"]}
                        alt=""
                        className="localNewsImage"
                      />
                    </Link>
                  </div>
                  <div className="col-6">
                    <a
                      className="localNewsDescription"
                      href={news?.link}
                      target="_blank"
                    >
                      {news?.title}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScienceComponent;
