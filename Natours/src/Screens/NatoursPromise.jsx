import React from "react";
import Discover from "../assets/Discover.png";
import Travel from "../assets/Travel.png";
import Enjoy from "../assets/Enjoy.png";
import Exploring from "../assets/Exploring.png";
import "./CssFiles/NatoursPromise.css"
function NatoursPromise() {
  const WhyChooseNatours = [
    {
      icon: Discover,
      tittle: "Discover the possibilities",
      details:
        "With nearly half a million attractions, hotels & more, you're sure to find joy.",
    },
    {
      icon: Travel,
      tittle: "Travel you can trust",
      details:
        "Read reviews & get reliable customer support. We're with you at every step.",
    },
    {
      icon: Enjoy,
      tittle: "Enjoy deals & delights",
      details:
        "Quality activities. Great prices. Plus, earn Klook credits to save more.",
    },
    {
      icon: Exploring,
      tittle: "Exploring made easy",
      details:
        "Book last minute, skip lines & get free cancellation for easier exploring.",
    },
  ];

  
    return (
  <div className="natours-wrapper">
    <h1>Why Choose Natours</h1>
    <br />
    <div className="natours-content">
      {WhyChooseNatours.map((item, index) => (
        <div key={index} className="promise-card">
          <img src={item.icon} alt={item.title} />
          <h3>{item.tittle}</h3>
          <p>{item.details}</p>
        </div>
      ))}
    </div>
  </div>
);

  
}

export default NatoursPromise;
