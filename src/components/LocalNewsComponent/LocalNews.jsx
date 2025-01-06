import React, { useState, useEffect } from "react";
import "./localNews.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearResults, setResults } from "../../SearchSlice/searchSlice";

const LocalNews = () => {
  const [localNews, setlocalNews] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.query);

  useEffect(() => {
    async function fetchLocalNews() {
      const response = await fetch(
        import.meta.env.VITE_APP_BASEURL + "news/local"
      );
      if (response.ok) {
        const data = await response.json();
        setlocalNews(data.data);
        setCarousel(data.data.slice(0, 5));
      }
    }
    fetchLocalNews();
  }, []);

  useEffect(() => {
    const ConvertToLowerCase = (data) => {
      return data?.toLowerCase();
    };

    if (search === "") {
      return;
    }

    const tempdata = localNews.filter((data) => {
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
    dispatch(clearResults());
    tempdata.map((data) => dispatch(setResults(data)));
  }, [search]);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev === carousel.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? carousel.length - 1 : prev - 1));
  };

  return (
    <div className="container-fluid LocalNews">
      <div className="row">
        {/* Carousel Section */}
        <div className="col-lg-12 col-md-12">
          <div className="carouselContainer">
            <div
              className="carouselTrack"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {carousel.map((item, index) => (
                <div className="carouselSlide" key={index}>
                  <img
                    src={item?.enclosure}
                    alt="News"
                    className="carouselImage"
                  />
                  <div className="carouselOverlay">
                    <h3>{item?.title || "News Title"}</h3>
                    <p>{item?.description || "News description goes here."}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carouselControl left" onClick={prevSlide}>
              <i className="fa fa-chevron-left"></i>
            </button>
            <button className="carouselControl right" onClick={nextSlide}>
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        {/* News Cards Section */}
        <div className="col-lg-12 col-md-12">
          <div className="row g-3">
            {localNews.slice(5, localNews.length).map((news, i) => (
              <div
                className="col-lg-4 col-md-12 col-sm-12 flippableCard"
                key={i}
              >
                <div className="cardInner">
                  {/* Front of the Card */}
                  <div className="cardFront">
                    <img
                      src={news?.enclosure}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalNews;
