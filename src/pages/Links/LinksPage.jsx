import React from "react";
import "./LinksPage.css";

const LinksPage = () => {
  const links = [
    {
      icon: "fa-trash",
      title: "Bin Collection Dates",
      url: "https://www.cambridge.gov.uk/check-when-your-bin-will-be-emptied",
    },
    {
      icon: "fa-file",
      title: "Council Tax Account and Bill",
      url: "https://www.cambridge.gov.uk/manage-your-council-tax-account-and-check-your-bill",
    },
    {
      icon: "fa-car",
      title: "Parking",
      url: "https://www.cambridge.gov.uk/parking",
    },
    {
      icon: "fa-flag",
      title: "Report Issues",
      url: "https://www.cambridge.gov.uk/report-it",
    },
    {
      icon: "fa-money",
      title: "Pay",
      url: "https://ip.e-paycapita.com/AIP/itemSelectionPage.do?link=showItemSelectionPage&siteId=85&languageCode=EN&source=AIP",
    },
    {
      icon: "fa-list",
      title: "Check Planning Applications",
      url: "https://applications.greatercambridgeplanning.org/online-applications/",
    },
  ];

  return (
    <div className="container LinksPage">
      <div className="row g-4">
        {links.map((link, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <div className="card linkCard">
              <div className="card-body text-center">
                <i className={`fa ${link.icon} icon`}></i>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkName"
                >
                  <h4>{link.title}</h4>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinksPage;
