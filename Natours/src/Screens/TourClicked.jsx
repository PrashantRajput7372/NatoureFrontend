import React, { useEffect, useState } from "react";

import { MdPeopleAlt } from "react-icons/md";
import { useParams } from "react-router-dom";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import TourMap from "./FitMapBounds";

import axios from "../Utils/axiosInstance";
import "./CssFiles/TourClicked.css";
import ReviewCard from "./ReviewScreen/ReviewCard";
import AddReview from "./ReviewScreen/AddReview";
import Footer from "./Footer";

const TourClicked = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

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
              <div>
                <h2>Quick Facts</h2>
              </div>
              <div>
                <p>
                  <GiWeightLiftingUp /> <span>Difficulty</span>{" "}
                  {data.difficulty.toUpperCase()}
                </p>
              </div>
              <div>
                <p>
                  <MdPeopleAlt /> <span>Participants</span> {data.maxGroupSize}
                </p>
              </div>
              <div>
                <p>
                  <FaStar /> <span>Ratings</span>{" "}
                  {data.ratingsAverage.toFixed(1)} / 5
                </p>
              </div>
            </div>
          </div>
          <div className="tourContainer">
            <div>
              <h2>Your Travel Guides</h2>

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
      <div className="tour-section tour-map">
        <TourMap locations={data.locations} />
      </div>
      <div className="reviews-section">
        <div className="tour-section tour-reviews">
          {data.reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      <div onClick={() => setOpen(true)} className="add-review">
        ADD Review
      </div>

      <div className="tour-section tour-book">
        Booking section Work is in process
      </div>
      <AddReview open={open} onClose={() => setOpen(false)} tourid={data._id} />
      <Footer />
    </div>
  );
};

export default TourClicked;
