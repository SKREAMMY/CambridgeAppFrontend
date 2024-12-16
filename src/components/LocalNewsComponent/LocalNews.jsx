import React, { useState, useEffect, useMemo } from "react";
import "./localNews.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearResults, setResults } from "../../SearchSlice/searchSlice";

const LocalNews = () => {
  const [localNews, setlocalNews] = useState([]);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.query);

  const [carousel, setCarousel] = useState([]);
  const [carouselNumber, setCarouselNumber] = useState(0);

  useEffect(() => {
    async function getLocalNewsFunction() {
      await fetch(import.meta.env.VITE_APP_BASEURL + "news/local")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          setlocalNews(json.data);
          setCarousel(json.data.filter((data, index) => index < 5));
        });
    }
    getLocalNewsFunction();
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

  function increaseCarouselNumber() {
    if (carouselNumber === 4) {
      setCarouselNumber(0);
      return;
    }
    setCarouselNumber((carouselNumber) => carouselNumber + 1);
  }

  function decreaseCarouselNumber() {
    if (carouselNumber === 0) {
      setCarouselNumber(carousel.length - 1);
      return;
    }
    setCarouselNumber((carouselNumber) => carouselNumber - 1);
  }

  return (
    <div className="container-fluid LocalNews">
      <div className="row localNewsBody">
        <div className="row carouselAndLocalNews">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="localCardCarousel">
              <div className="d-flex flex-column carouselItem">
                <div className="flex-grow-8 carouselImage">
                  <Link to={carousel[carouselNumber]?.link}>
                    <img
                      src={carousel[carouselNumber]?.enclosure}
                      alt=""
                      className="localNewsImage"
                    />
                  </Link>
                  <div className="carouselNavigationLeft">
                    <i
                      className="fa fa-caret-left"
                      onClick={increaseCarouselNumber}
                    ></i>
                  </div>
                  <div className="carouselNavigationRight">
                    <i
                      className="fa fa-caret-right"
                      onClick={decreaseCarouselNumber}
                    ></i>
                  </div>
                </div>

                <div className="flex-grow-2 carouselDescription">
                  <a
                    className="localNewsDescriptionWhite"
                    href={carousel[carouselNumber]?.link}
                    target="_blank"
                  >
                    {carousel[carouselNumber]?.description}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-12 localNewsCards">
            {localNews.slice(5, 8).map((news, i) => (
              <div className="localNewsImageContainer" key={i}>
                <div className="row localImageCard">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <Link to={news?.link} target="_blank">
                      <img
                        src={news?.enclosure}
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
            ))}
          </div>
        </div>
        <div className="row localNewsList">
          {localNews.slice(8, 10).map((news, i) => (
            <div className="col-lg-6 col-md-12 col-sm-12" key={i}>
              <div className="localNewsImageContainer">
                <div className="row localImageCard">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <Link to={news?.link} target="_blank">
                      <img
                        src={news?.enclosure}
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
          ))}
        </div>
        <div className="row localNewsListmid">
          {localNews.slice(10, 12).map((news, i) => (
            <div className="col-lg-6 col-md-12 col-sm-12" key={i}>
              <div className="localNewsImageContainer">
                <div className="row localImageCard">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <Link to={news?.link} target="_blank">
                      <img
                        src={news?.enclosure}
                        alt=""
                        className="localNewsImage"
                      />
                    </Link>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a
                      className="localNewsDescriptionWhite"
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
        <div className="row localNewsList">
          {localNews.slice(12, localNews.length).map((news, i) => (
            <div className="col-lg-6 col-md-12 col-sm-12 allLocalNews" key={i}>
              <div className="localNewsImageContainer">
                <div className="row localImageCard">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <Link to={news?.link} target="_blank">
                      <img
                        src={news?.enclosure}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalNews;

// <div className="col-sm-12 col-md-8 col-lg-9">
// <div className="row">
//   <div className="col-12">
//     <div className="localnewscarousel">
//       <div
//         id="carouselExampleCaptions"
//         class="carousel slide localnewscarousel"
//         data-bs-ride="carousel"
//       >
//         <div class="carousel-indicators">
//           {carousel.map((news, index) => (
//             <button
//               type="button"
//               data-bs-target="#carouselExampleCaptions"
//               data-bs-slide-to={index}
//               class="active"
//               aria-current="true"
//               aria-label="Slide 1"
//             ></button>
//           ))}
//         </div>
//         <div class="carousel-inner">
//           {carousel.map((news, index) => (
//             <div class="carousel-item  active">
//               <Link to={news?.link}>
//                 <img
//                   src={news?.enclosure}
//                   class="d-block carousel-item-width"
//                   alt="..."
//                   href={news?.link}
//                 />
//               </Link>

//               <div class="carousel-caption d-none d-md-block">
//                 <h5>{news?.title}</h5>
//                 <p>{news?.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           class="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="prev"
//         >
//           <span
//             class="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span class="visually-hidden">Previous</span>
//         </button>
//         <button
//           class="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="next"
//         >
//           <span
//             class="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   </div>
//   {/* <div className="col-sm-12 col-md-4 col-lg-3">
//     <div>Ad here</div>
//   </div> */}
// </div>

// <div className="row alignCards">
//   {!search && (
//     <>
//       {/* {carousel.map((news) => (
//         <>
//         </>
//       ))} */}

//       {localNews.map((news) => (
//         <>
//           <div className="col-sm-12 col-md-6 col-lg-6">
//             {/* <div
//               className="card localNewsCard card-color"
//               style={{ backgroundColor: "rgb(72,72,72)" }}
//             >
//               <div className="card-horizontal row d-flex flex-row alignment">
//                 <div className="col-sm-12 col-md-6 col-lg-6 img-square-wrapper">
//                   <img
//                     src={news.enclosure?.}
//                     className="localNewsImage"
//                     alt=""
//                   />
//                 </div>
//                 <div className="col-sm-12 col-md-6 col-lg-6">
//                   <div className="card-body">
//                     <h4 className="card-title">{news.title}</h4>
//                     <p className="card-text">{news.description}</p>
//                     <a href={news.link} className="btn btn-primary">
//                       Learn more
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div> */}

//             <div class="cardwrapper">
//               <div class="image">
//                 <img src={news?.enclosure} class="image" />
//                 <p className="localNewsTitle titlebackground">
//                   {news?.title}
//                 </p>

//                 <div class="content">
//                   <div className="localNewsDescription">
//                     {news?.description}
//                   </div>
//                   <button className="btn btn-primary">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ))}
//     </>
//   )}

//   {search && (
//     <>
//       {filteredresult && (
//         <>
//           {filteredresult.map((news) => (
//             <>
//               <div className="col-sm-12 col-md-12 col-lg-6">
//                 <div className="card localNewsCard">
//                   <div className="card-horizontal row d-flex flex-row alignment">
//                     <div className="col-sm-12 col-md-6 col-lg-6 img-square-wrapper">
//                       <img
//                         src={news.enclosure?.}
//                         className="localNewsImage"
//                         alt=""
//                       />
//                     </div>
//                     <div className="col-sm-12 col-md-6 col-lg-6">
//                       <div className="card-body">
//                         <h4 className="card-title">{news.title}</h4>
//                         <p className="card-text">
//                           {news.description}
//                         </p>
//                         <a
//                           href={news.link}
//                           className="btn btn-primary"
//                         >
//                           Learn more
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           ))}
//         </>
//       )}

//       {filteredresult.length == 0 && (
//         <>
//           <p>No related data</p>
//         </>
//       )}
//     </>
//   )}
// </div>
// </div>

// <div className="col-sm-12 col-md-3 col-lg-3 sidebar">
// <h2>Read other</h2>
// <hr />
// {localNews.toReversed().map((news) => (
//   <>
//     <a href={news.link}>{news.title}</a>
//     <hr />
//   </>
// ))}
// </div>
