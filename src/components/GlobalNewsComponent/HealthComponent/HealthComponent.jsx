import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setResults } from "../../../SearchSlice/searchSlice";

import "./health.css";

const HealthComponent = () => {
  const [health, setHealth] = useState([]);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.query);
  // console.log("search from health ", search);

  useEffect(() => {
    const ConvertToLowerCase = (data) => {
      return data?.toLowerCase();
    };

    if (search === "") {
      return;
    }

    const tempdata = health.filter((data) => {
      let title = ConvertToLowerCase(data.title);
      let description = ConvertToLowerCase(data.description);
      let searchableString = ConvertToLowerCase(search);

      let flag =
        title?.includes(searchableString) ||
        description?.includes(searchableString);
      if (flag) {
        return data;
      }
    });
    // console.log("results from health ", tempdata);

    tempdata.map((data) => dispatch(setResults(data)));
  }, [search]);

  useEffect(() => {
    async function fetchGlobalHealth() {
      await fetch(import.meta.env.VITE_APP_BASEURL + "news/global/health")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          setHealth(json.data);
        });
    }

    fetchGlobalHealth();
  }, []);
  return (
    <div>
      <div className="container-fluid LocalNews">
        <div className="row localNewsBody">
          <div className="row localNewsList">
            {health.map((news, i) => (
              <div
                className={
                  i % 3 === 0
                    ? "col-lg-6 col-md-12 col-sm-12 allLocalNews background-green"
                    : "col-lg-6 col-md-12 col-sm-12 allLocalNews"
                }
                key={i}
              >
                <div className="localNewsImageContainer">
                  <div className="row localImageCard">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <Link to={news?.link} target="_blank">
                        <img
                          src={news?.mediaThumbnail["url"]}
                          alt=""
                          className="localNewsImage"
                        />
                      </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12s">
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

export default HealthComponent;
