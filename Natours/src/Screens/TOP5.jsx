import React, { useEffect, useState } from "react";
import { top5Tours } from "../Services/authService";
import { useNavigate } from "react-router-dom";
import ToursNavBar from "./ToursNavbar";

function TOP5() {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await top5Tours();
        setTours(data.tours); // Assuming API returns { tours: [...] }
      } catch (err) {
        console.error("Error fetching top 5 tours", err);
      }
    };

    fetchTours();
  }, []);
  const handleMoreDetails = (id) => navigate(`/tours/${id}`);

  return (
    <div className="all-tours-container">
      <ToursNavBar />

      <div className="tour-grid">
        {tours.map((item, index) => (
          <div key={index} className="tour-card">
            <img
              src={`/img/tours/${item.imageCover.replace('.jpg', '.webp')}`} 
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
              <button className="details-btn" onClick={() => handleMoreDetails(item.id)}>Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TOP5;
