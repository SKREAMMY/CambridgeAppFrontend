import React, { Suspense, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/headerComponent/Header";
import Footer from "./components/footerComponent/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = React.lazy(() => import("./pages/Movies/MoviesPage"));
const LinksPage = React.lazy(() => import("./pages/Links/LinksPage"));

import { Provider } from "react-redux";
import { store } from "./Store/Store";

// changes to be done

// make some UI changes on the movies modal regarding show booking
// when the modal opens in movies page, the UI scrolls back for no reason.

const BannerModal = () => {
  const [show, setShow] = useState(false);

  // Function to handle closing the banner
  const handleClose = () => setShow(false);

  // Open the banner on initial page load
  useEffect(() => {
    const hasSeenBanner = localStorage.getItem("hasSeenBanner");

    if (!hasSeenBanner) {
      setShow(true);
      localStorage.setItem("hasSeenBanner", "true");
    }
  }, []);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <img
          className="workinprogressGIF"
          src="https://media.giphy.com/media/lW6YSh8LVkaUhNnIfi/giphy.gif"
          alt="Funny Work in Progress GIF"
        />
        <b>
          Most of the heavy lifting is done—just a few final sprinkles of magic
          left to add. Thanks for bearing with us!
        </b>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleClose}
          className="btn btn-warning"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

function App() {
  const [notice, setNotice] = useState(true);

  const changeNotice = (notice) => {
    setNotice(notice);
  };

  return (
    <>
      <div className="App container">
        <BannerModal />
        <Router>
          <Provider store={store}>
            <Header />
            <Suspense fallback={<span>Loading...</span>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/links" element={<LinksPage />} />
              </Routes>
            </Suspense>

            <Footer />
          </Provider>
        </Router>
      </div>
    </>
  );
}

export default App;
