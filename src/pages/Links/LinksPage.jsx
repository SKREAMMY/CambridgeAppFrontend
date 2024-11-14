import React from "react";
import "./LinksPage.css";

const LinksPage = () => {
  return (
    <>
      <div className="row linkpage">
        <div className="col-lg-3 col-md-4 col-sm-6 ">
          <div className="container">
            <div className="card bin-card">
              <div className="card-body d-flex flex-column bin-body">
                <i className="fa fa-trash fa-bounce icon"></i>
                {/* <h2>Bin Collection Dates</h2> */}
                <a
                  className="linkName"
                  target="_blank"
                  href="https://www.cambridge.gov.uk/check-when-your-bin-will-be-emptied"
                >
                  <h2>Bin Collection dates</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="container">
            <div className="card bin-card ">
              <div className="card-body d-flex flex-column bin-body">
                <i className="fa fa-file icon"></i>
                <a
                  className="linkName"
                  target="_blank"
                  href="https://www.cambridge.gov.uk/manage-your-council-tax-account-and-check-your-bill"
                >
                  <h2>Council Tax account and Bill</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="container">
            <div className="card bin-card ">
              <div className="card-body d-flex flex-column bin-body">
                <i className="fa fa-car icon"></i>
                <a
                  className="linkName"
                  target="_blank"
                  href="https://www.cambridge.gov.uk/parking"
                >
                  <h2>Parking</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="container">
            <div className="card bin-card ">
              <div className="card-body d-flex flex-column bin-body">
                <i className="fa fa-flag icon"></i>
                <a
                  className="linkName"
                  target="_blank"
                  href="https://www.cambridge.gov.uk/report-it"
                >
                  <h2>Report issues</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="container">
            <div className="card bin-card ">
              <div className="card-body d-flex flex-column bin-body">
                <i className="fa fa-money icon"></i>
                <a
                  className="linkName"
                  target="_blank"
                  href="https://ip.e-paycapita.com/AIP/itemSelectionPage.do?link=showItemSelectionPage&siteId=85&languageCode=EN&source=AIP"
                >
                  <h2>Pay</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="container">
            <div className="card bin-card ">
              <div className="card-body d-flex flex-column bin-body">
                <i className="fa fa-list icon"></i>
                <a
                  className="linkName"
                  target="_blank"
                  href="https://applications.greatercambridgeplanning.org/online-applications/"
                >
                  <h2>Check Planning Applications</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinksPage;
