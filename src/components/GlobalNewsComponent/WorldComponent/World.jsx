import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const World = () => {
  const [worldStories, setWorldStories] = useState([]);

  useEffect(() => {
    async function fetchGlobalTopStories() {
      await fetch(import.meta.env.VITE_APP_BASEURL + "news/global/world")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          setWorldStories(json.data);
        });
    }

    fetchGlobalTopStories();
  }, []);

  return (
    <div>
      <div className="container-fluid LocalNews">
        <div className="row localNewsBody">
          <div className="row localNewsList">
            {worldStories.map((news, i) => (
              <div
                className="col-lg-4 col-md-12 col-sm-12 allLocalNews"
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

export default World;
