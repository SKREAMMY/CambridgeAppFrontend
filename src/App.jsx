import { useState } from "react";
import "./App.css";
import Header from "./components/headerComponent/Header";
import Footer from "./components/footerComponent/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/Movies/MoviesPage";
import LinksPage from "./pages/Links/LinksPage";
import { Provider } from "react-redux";
import { store } from "./Store/Store";

const OnPageLoad = ({ open }) => {
  return (
    <div className="notice">
      <span>
        ***** Some functionalities are yet to be added as this page is currently
        undergoing development. Thank you for understanding! *****
      </span>
    </div>
  );
};

function App() {
  return (
    <>
      <div className="App container">
        <OnPageLoad />

        <Router>
          <Provider store={store}>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/links" element={<LinksPage />} />
            </Routes>
            <Footer />
          </Provider>
        </Router>
      </div>
    </>
  );
}

export default App;
