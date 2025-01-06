import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResults } from "../../../SearchSlice/searchSlice";

import { Link } from "react-router-dom";

import "./science.css";

const ScienceComponent = () => {
  const [science, setScience] = useState([]);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.query);
  // console.log("search from science ", search);

  useEffect(() => {
    const ConvertToLowerCase = (data) => {
      return data?.toLowerCase();
    };

    if (search === "") {
      return;
    }

    const tempdata = science.filter((data) => {
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
    // console.log("results from science ", tempdata);

    tempdata.map((data) => dispatch(setResults(data)));
  }, [search]);

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
        <div className="localNewsList">
          {/* {science.map((news, i) => (
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
                  <div className="col-lg-6 col-md-6 col-sm-12">
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
          ))} */}
          <div className="row g-3">
            {science.map((news, i) => (
              <div
                className="col-lg-4 col-md-12 col-sm-12 flippableCard"
                key={i}
              >
                <Link to={news?.link} target="blank">
                  <div className="cardInner">
                    {/* Front of the Card */}
                    <div className="cardFront">
                      <img
                        src={news?.mediaThumbnail["url"]}
                        alt="News"
                        className="newsCardImage"
                      />
                      <div className="newsCardContent">
                        <h3>{news?.title}</h3>
                      </div>
                    </div>
                    {/* Back of the Card */}
                    <div className="cardBack">
                      <h5>{news?.description}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceComponent;
