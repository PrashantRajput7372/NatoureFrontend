import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./CssFiles/AllTours.css"; // CSS file you'll create
import ToursNavBar from "./ToursNavbar";
import { FilterContext } from "../Contexts/FilterContext";
import { useNavigate } from "react-router-dom";

const AllTours = () => {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);
  const { difficulty, sort } = useContext(FilterContext);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        let endpoint = "http://localhost:3000/api/v1/tours";
        if (difficulty) endpoint += `?difficulty=${difficulty}`;
        if (sort && difficulty) endpoint += `&sort=${sort}`;
        if (sort && !difficulty) endpoint += `?sort=${sort}`;
        console.log(endpoint);
        const res = await axios.get(endpoint);
        setTours(res.data.data.tours);
      } catch (error) {
        console.error("Error fetching tours", error);
      }
    };

    fetchTours();
  }, [difficulty, sort]);
  useEffect(() => {
    console.log(difficulty);
    console.log(sort);
  }, [difficulty, sort]);
  const handleMoreDetails = (id) => {
    console.log(id);
    navigate(`/tours/${id}`);
  };

  return (
    <div className="all-tours-container">
      <ToursNavBar />

      <div className="tour-grid">
        {tours.map((item) => (
          <div
            key={item.id}
            className="tour-card">
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
              <button className="details-btn"onClick={() => handleMoreDetails(item.id)}>Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTours;
