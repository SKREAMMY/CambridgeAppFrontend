import React, { useEffect, useState } from "react";
import "./MoviesPage.css";
import SimpleDateTime from "react-simple-timestamp-to-date";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  let navigate = useNavigate();
  const [vueData, setVueData] = useState([]);
  const day = "";
  const [datelists, setDateLists] = useState([]);
  const [modalData, setModalData] = useState({});
  const [dateforModal, setDateforModal] = useState("");

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
    let fullurl = "https://" + data;
    console.log(fullurl);
    let res = fullurl.replace("vue", "myvue");
    window.open(res);
  };

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

    const getLightsData = async () => {
      await fetch(import.meta.env.VITE_APP_BASEURL + "movies/lights")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((jsondata) => {
          console.log("lights data ", jsondata);
        });
    };

    getVueData();
  }, []);

  return (
    <>
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
                  <h5 className="card-title">{data["filmTitle"]}</h5>
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
