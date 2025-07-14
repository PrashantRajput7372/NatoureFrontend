import React, { useEffect, useState } from "react";
// import { IoPeople } from "react-icons/io5"
import { MdPeopleAlt } from 'react-icons/md';
import { useParams } from "react-router-dom";
import Difficulty from "../assets/difficult.png"
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import FitMapBounds from "./fitMapBounds";

import axios from "../Utils/axiosInstance";
import "./CssFiles/TourClicked.css";
import ReviewCard from "./ReviewCard";
const TourClicked = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await axios.get(`/tours/${id}`);
        setData(res.data.data.reqsTour);
      } catch (err) {
        console.error("Error fetching tour by ID:", err);
      }
    };

    if (id) fetchTour();
  }, [id]);

  if (!data) return null;

  return (
    <div className="tour-wrapper">
      {console.log(data)}
      {/* HERO */}
      <div className="tour-hero">
        <img
          src={`http://localhost:3000/img/tours/${data.images[0]}`}
          alt="hero"
        />
      </div>

      {/* DETAILS SECTION */}
      <div className="tour-info-section">
        <div className="tour-facts">
          <div className="tourContainer">
            <div>
              <div><h2>Quick Facts</h2></div>
            <div><p><span>Difficulty</span> {data.difficulty}</p></div>
            <div><p><span>Participants</span> {data.maxGroupSize}</p></div>
            <div><p><span>Ratings</span> {data.ratingsAverage} / 5</p></div>
            </div>
          </div>
          <div className="tourContainer">
            <div ><h2 >Your Travel Guides</h2>
            
              {data.guides.map((guide) => (
              <div className="tour-guide" key={guide._id}>
                <img
                  src={`http://localhost:3000/img/users/${guide.photo}`}
                  alt={guide.name}
                />
                <p>
                  <strong>{guide.role}</strong>: {guide.name}
                </p>
              </div>
            ))}
            </div>
          </div>
        </div>
        <div className="tour-about">
          
            <h2>About {data.name}</h2>
            <p>{data.description}</p>
          
        </div>
      </div>

      {/* SLANTED IMAGE STRIP */}
      <div className="image-strip-wrapper">
        {data.images.map((img, index) => (
          <div key={index} className="image-strip-card">
            <img src={`http://localhost:3000/img/tours/${img}`} alt="" />
          </div>
        ))}
      </div>

      {/* MAP / REVIEWS / BOOK */}
      <div className="tour-section tour-map">Map will come here</div>
      <div className="tour-section tour-reviews">
        {data.reviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding:"20px",
          backgroundColor:"#69CE75"
        }}
      >
        ADD Review
      </div>
      <div className="tour-section tour-book">Booking section</div>
    </div>
  );
};

export default TourClicked;
