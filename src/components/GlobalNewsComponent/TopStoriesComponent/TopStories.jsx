import React, { useEffect, useState } from "react";
// const cronjob = require("node-cron");
import "./TopStories.css";
import { Link } from "react-router-dom";

const TopStories = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    async function fetchGlobalTopStories() {
      await fetch(import.meta.env.VITE_APP_BASEURL + "news/global/topStories")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          setTopStories(json.data);
        });
    }

    fetchGlobalTopStories();
  }, []);

  return (
    <div className="container-fluid LocalNews">
      <div className="row localNewsBody">
        <div className="row localNewsList">
          {topStories.map((news, i) => (
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
    // <div>
    //   {topStories.map((news) => (
    //     <div>{news.title}</div>
    //   ))}
    // </div>
  );
};

export default TopStories;
