import React, { useEffect, useState } from "react";
import { top5Tours } from "../Services/authService";
import ToursNavBar from "./ToursNavbar";

function TOP5() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await top5Tours();
        console.log(data.tours, "<-- fetched top 5 tours");
        setTours(data.tours); // Assuming API returns { tours: [...] }
      } catch (err) {
        console.error("Error fetching top 5 tours", err);
      }
    };

    fetchTours();
  }, []);

  return (
    <div className="all-tours-container">
       <ToursNavBar/>
      
 
      <div className="tour-grid">
        {tours.map((item, index) => (
          <div key={index} className="tour-card">
            <img
              src={`http://localhost:3000/img/tours/${item.imageCover}`}
              alt={item.name}
              className="tour-image"
            />
            <div className="tour-details">
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
            </div>
            <div className="card-bottom">
              <div className="tour-meta">
                <p>
                  ⭐ {Number(item.ratingsAverage).toFixed(1)} (
                  {item.ratingsQuantity})
                </p>
                <p>🕒 {item.duration} days</p>
                <p>💰 ₹{item.price} per person</p>
              </div>
              <button className="details-btn">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default TOP5;
