import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./searchNews.css";

const SearchedNews = () => {
  const results = useSelector((state) => state.search.results);
  console.log("=========== results are ", results);

  useEffect(() => {
    console.log("component re rendered");
  }, [results]);

  return (
    <div className="row localNewsList">
      {results.map((news, i) => (
        <div className="col-lg-4 col-md-12 col-sm-12 allLocalNews" key={i}>
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
  );
};

export default SearchedNews;
