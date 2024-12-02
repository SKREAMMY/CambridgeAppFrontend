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
                {/* <h4>Bin Collection Dates</h4> */}
                <a
                  className="linkName"
                  target="_blank"
                  href="https://www.cambridge.gov.uk/check-when-your-bin-will-be-emptied"
                >
                  <h4>Bin Collection dates</h4>
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
                  <h4>Council Tax account and Bill</h4>
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
                  <h4>Parking</h4>
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
                  <h4>Report issues</h4>
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
                  <h4>Pay</h4>
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
                  <h4>Check Planning Applications</h4>
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
