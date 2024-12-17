import React, { useEffect, useState } from "react";
import "./MoviesPage.css";
import SimpleDateTime from "react-simple-timestamp-to-date";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMovieResults } from "../../SearchSlice/searchSlice";

const MoviesPage = () => {
  let navigate = useNavigate();
  const [vueData, setVueData] = useState([]);
  const day = "";
  const [datelists, setDateLists] = useState([]);
  const [modalData, setModalData] = useState({});
  const [dateforModal, setDateforModal] = useState("");
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search.query);
  const searchedMovies = useSelector((state) => state.search.movieResults);
  console.log("query from movies ", search);
  console.log("searched movies results ", searchedMovies);

  const renderdataonModal = (e) => {
    setModalData(e);
    let alldates = [];
    Object.keys(e.sessions).map((key) => {
      alldates.push(key);
    });
    setDateLists(alldates);
  };

  const setDatefortheModal = (e) => {
    setDateforModal(e.date);
  };

  const redirectoBooking = (data) => {
    // let fullurl = "https://" + data;
    // console.log(fullurl);
    // let res = fullurl.replace("vue", "myvue");
    console.log("printing redirect url ", data);

    window.open(data);
  };

  useEffect(() => {
    const ConvertToLowerCase = (data) => {
      return data?.toLowerCase();
    };

    if (search === "") {
      return;
    }

    const tempdata = vueData.filter((data) => {
      let filmTitle = ConvertToLowerCase(data.filmTitle);
      let searchableString = ConvertToLowerCase(search);

      let flag = filmTitle?.includes(searchableString);
      if (flag) {
        console.log("film title ", filmTitle, searchableString);

        return data;
      }
    });
    console.log("results from movies ", tempdata);

    // tempdata.map((data) => dispatch(setMovieResults(data)));
    dispatch(setMovieResults(tempdata));
  }, [search]);

  useEffect(() => {
    const getVueData = async () => {
      await fetch(import.meta.env.VITE_APP_BASEURL + "movies/vue")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((jsondata) => {
          setVueData(jsondata.data);
        });
    };

    getVueData();
  }, []);

  return (
    <>
      {searchedMovies.length > 0 && (
        <div className="row">
          {searchedMovies.map((data) => (
            <div
              className="vuedatacard col-lg-3 col-md-6 col-sm-6"
              key={data["_id"]}
            >
              <div className="movie-card">
                <div className="image-card">
                  <img
                    className="card-img-top movie-image"
                    src={data["posterImageSrc"]}
                    alt="Card image cap"
                    data-bs-toggle="modal"
                    data-bs-target=".bd-example-modal-lg"
                    onClick={() => {
                      {
                        setDateforModal("");
                        renderdataonModal(data);
                      }
                    }}
                  />
                </div>

                <div className="card-body d-flex">
                  <h5
                    className="movie-title"
                    data-bs-toggle="modal"
                    data-bs-target=".bd-example-modal-lg"
                    onClick={() => {
                      {
                        setDateforModal("");
                        renderdataonModal(data);
                      }
                    }}
                  >
                    {data["filmTitle"]}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="movietype d-flex flex-row">
        <div className="cinemaInfo">
          Displaying all the movies of{" "}
          <span style={{ fontWeight: "bold" }}> Vue Cinema</span>
        </div>
      </div>

      <div className="movies">
        <div className="row">
          {vueData.map((data) => (
            <div
              className="vuedatacard col-lg-3 col-md-6 col-sm-6"
              key={data["_id"]}
            >
              <div className="movie-card">
                <div className="image-card">
                  <img
                    className="card-img-top movie-image"
                    src={data["posterImageSrc"]}
                    alt="Card image cap"
                    data-bs-toggle="modal"
                    data-bs-target=".bd-example-modal-lg"
                    onClick={() => {
                      {
                        setDateforModal("");
                        renderdataonModal(data);
                      }
                    }}
                  />
                </div>

                <div
                  className="modal fade bd-example-modal-lg"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{modalData.filmTitle}</h5>
                        <button
                          type="button"
                          className="close btn btn-secondary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="row modaldata">
                          <div className="col-4 modalImage">
                            <img
                              src={modalData.posterImageSrc}
                              alt=""
                              className="movie-image-modal"
                            />
                          </div>
                          <div className="col-8 modalDescription">
                            {modalData.synopsisShort}
                            <hr />
                            Duration: {modalData.duration} minutes
                            <hr />
                            Director: {modalData.director}
                            <hr />
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                {dateforModal && <span>{dateforModal}</span>}
                                {!dateforModal && <span>choose date</span>}
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                {datelists.map((date) => (
                                  <a
                                    href="#"
                                    className="dropdown-item"
                                    key={date}
                                    onClick={() => setDatefortheModal({ date })}
                                  >
                                    {date}
                                  </a>
                                ))}
                              </div>
                              <hr />
                              <div className="row">
                                {modalData.sessions?.[dateforModal]?.map(
                                  (alldata) => (
                                    <>
                                      <div className="col-lg-6 col-md-6 col-sm-12">
                                        <b>{alldata.screenName}</b> -
                                        {alldata.startTime} - {alldata.endTime}{" "}
                                        &nbsp;
                                        <b>Price: </b>
                                        {alldata.price}
                                        &nbsp;
                                        <a
                                          onClick={() =>
                                            redirectoBooking(alldata.bookingUrl)
                                          }
                                          className="btn btn-primary"
                                        >
                                          Book now
                                        </a>
                                      </div>
                                    </>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body d-flex">
                  <h5
                    className="movie-title"
                    data-bs-toggle="modal"
                    data-bs-target=".bd-example-modal-lg"
                    onClick={() => {
                      {
                        setDateforModal("");
                        renderdataonModal(data);
                      }
                    }}
                  >
                    {data["filmTitle"]}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
