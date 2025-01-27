import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./searchNews.css";

const SearchedNews = () => {
  const results = useSelector((state) => state.search.results);
  const query = useSelector((state) => state.search.query);

  return (
    <>
      <div className="row localNewsList">
        {results.length == 0 && query.length != 0 ? (
          <h1>No data found</h1>
        ) : (
          <div className="row">
            {/* {results.map((news, i) => (
              <div
                className="col-lg-4 col-md-12 col-sm-12 allLocalNews"
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

            {results.map((news, i) => (
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
        )}
      </div>
    </>
  );
};

export default SearchedNews;
