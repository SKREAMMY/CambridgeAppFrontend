import React, { Suspense, useState } from "react";
import "./App.css";
import Header from "./components/headerComponent/Header";
import Footer from "./components/footerComponent/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
// import MoviesPage from "./pages/Movies/MoviesPage";
// import LinksPage from "./pages/Links/LinksPage";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = React.lazy(() => import("./pages/Movies/MoviesPage"));
const LinksPage = React.lazy(() => import("./pages/Links/LinksPage"));

import { Provider } from "react-redux";
import { store } from "./Store/Store";

const OnPageLoad = ({ showNotice, changeNotice }) => {
  return (
    <>
      {showNotice && (
        <div className="notice">
          <span>
            ***** Some functionalities are yet to be added as this page is
            currently undergoing development. Thank you for understanding! *****
          </span>
          <button
            className="btn btn-primary"
            onClick={(e) => changeNotice(false)}
          >
            Close
          </button>
        </div>
      )}
    </>
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
        <OnPageLoad showNotice={notice} changeNotice={changeNotice} />

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
