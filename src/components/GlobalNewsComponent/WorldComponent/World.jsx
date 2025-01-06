import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./world.css";
import { useDispatch, useSelector } from "react-redux";
import { setResults } from "../../../SearchSlice/searchSlice";

const World = () => {
  const [worldStories, setWorldStories] = useState([]);
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search.query);
  // console.log("search from world ", search);

  useEffect(() => {
    const ConvertToLowerCase = (data) => {
      return data?.toLowerCase();
    };

    if (search === "") {
      return;
    }

    const tempdata = worldStories.filter((data) => {
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
    // console.log("results from world ", tempdata);

    tempdata.map((data) => dispatch(setResults(data)));
  }, [search]);

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
      <div className="container-fluid worldStories">
        <div className="row worldStoriesBody">
          <div className="worldStoriesList">
            {/* {worldStories.map((news, i) => (
              <div
                className={
                  i % 3 === 0
                    ? "col-lg-6 col-md-12 col-sm-12 allworldStories background-green"
                    : "col-lg-6 col-md-12 col-sm-12 allworldStories"
                }
                key={i}
              >
                <div className="worldStoriesImageContainer">
                  <div className="row localImageCard">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <Link to={news?.link} target="_blank">
                        <img
                          src={news?.mediaThumbnail["url"]}
                          alt=""
                          className="worldStoriesImage"
                        />
                      </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <a
                        className="worldStoriesDescription"
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
              {worldStories.map((news, i) => (
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
    </div>
  );
};

export default World;
