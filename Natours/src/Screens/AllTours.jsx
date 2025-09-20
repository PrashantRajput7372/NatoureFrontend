import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./CssFiles/AllTours.css";
import ToursNavBar from "./ToursNavbar";
import { FilterContext } from "../Contexts/FilterContext";
import { useNavigate } from "react-router-dom";

const AllTours = () => {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const { difficulty, sort } = useContext(FilterContext);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        let endpoint = `https://natours-i6gl.onrender.com/api/v1/tours`; 
        if (difficulty) endpoint += `?difficulty=${difficulty}`;
        if (sort && difficulty) endpoint += `&sort=${sort}`;
        if (sort && !difficulty) endpoint += `?sort=${sort}`;

        const res = await axios.get(endpoint);
        setTours(res.data.data.tours);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching tours", error);
      }
    };

    fetchTours();
  }, [difficulty, sort]);

  const handleMoreDetails = (id) => navigate(`/tours/${id}`);
  

  return (
    <div className="all-tours-container">
      <ToursNavBar />
      <div className="tour-grid">
        {loading ?(tours.map((item) => (
          <div key={item.id} className="tour-card">
            <img
              src={`/img/tours/${item.imageCover.replace('.jpg', '.webp')}`}
              alt={item.name}
              className="tour-image"
              // onLoad={() => setLoading(false)}
              loading="lazy" // 🔥 Lazy load images
            />
            <div className="tour-details">
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
            </div>
            <div className="card-bottom">
              <div className="tour-meta">
                <p>⭐ {Number(item.ratingsAverage).toFixed(1)} ({item.ratingsQuantity})</p>
                <p>🕒 {item.duration} days</p>
                <p>💰 ₹{item.price} per person</p>
              </div>
              <button className="details-btn" onClick={() => handleMoreDetails(item.id)}>Details</button>
            </div>
          </div>
        ))):( Array(6).fill({}).map((_, idx) => (
        <div key={idx} className="tour-card">
          <div className="image-placeholder" />
          <div className="tour-details">
            <h3>Loading...</h3>
            <p>Please wait</p>
          </div>
          <div className="card-bottom">
            <div className="tour-meta">
              <p>⭐ --</p>
              <p>🕒 -- days</p>
              <p>💰 ₹-- per person</p>
            </div>
            <button className="details-btn" disabled>Details</button>
          </div>
        </div>
      )))}
      </div>
    </div>
  );
};

export default AllTours;
