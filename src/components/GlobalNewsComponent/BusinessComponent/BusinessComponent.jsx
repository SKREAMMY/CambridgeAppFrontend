import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./business.css";

const BusinessComponent = () => {
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    async function fetchGlobalBusiness() {
      await fetch(import.meta.env.VITE_APP_BASEURL + "news/global/business")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          setBusiness(json.data);
        });
    }

    fetchGlobalBusiness();
  }, []);
  return (
    <div>
      <div className="container-fluid LocalNews">
        <div className="row localNewsBody">
          <div className="row localNewsList">
            {business.map((news, i) => (
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
    </div>
  );
};

export default BusinessComponent;
