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
import { loadStripe } from "@stripe/stripe-js";
import { getAuthCode } from "../Services/authService";
import { Button } from "@mui/material";

const TourClicked = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  const token = getAuthCode();
  console.log("Auth Token:", token);

  const stripePromise = loadStripe(
    "pk_test_51S9nP3K1oNIYPRRMbIJVy86qGn0TiZ3tLL2jV3Z2vPjF0yKnXTEYT17Pm8tmgsZba4MP3TCDqBnMwyoozhLYFzf500el8wdny9"
  );

  const handleBooking = async () => {
    console.log("Booking clicked", id);
    const url = `https://natours-i6gl.onrender.com/api/v1/booking/checkout-session/${id}`;
    console.log(url);
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res.data;
    console.log(data);

    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: data.session.id });
  };

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await axios.get(`/tours/${id}`);
        console.log(res.data.data);
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
      {/* {console.log(data)} */}

      {/* HERO */}
      <div className="tour-hero">
        <img
          src={`/img/tours/${data.images[0].replace(".jpg", ".webp")}`}
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
                    src={`/img/users/${guide.photo.split(".")[0]}.jpg`}
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
            <img src={`/img/tours/${img.replace(".jpg", ".webp")}`} alt="" />
          </div>
        ))}
      </div>

      {/* MAP / REVIEWS / BOOK */}
      <div className="tour-section tour-map">
        <TourMap locations={data.locations} />
      </div>
      <div className="reviews-section">
        <div className="review-title"> 
          <span>
            WHAT OUR TRAVELERS <span style={{ color: "red" }}>ARE SAYING </span>
          </span>
          </div>
        <div className="tour-section tour-reviews">
          {data.reviews && data.reviews.length > 0 ? (
            data.reviews.map((review, i) =>
              review ? <ReviewCard key={i} review={review} /> : null
            )
          ) : (
            <div>NO Reviews Yet!!!</div>
          )}
        </div>
      </div>

      {/* <div 
        className="tour-book"
       >
        <span style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}>
          share your review or feedback to help us improve your experience
        </span>
        <Button className="btn-book-rev" onClick={() => setOpen(true)}>
          ADD Review
        </Button>
      </div>

      <div className="tour-book">
        <span style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}>
          Your adventure awaits – Book now for ₹{data.price}
        </span>
          
        <Button  className="btn-book-rev" 
          onClick={handleBooking}>
          Book Tour 
        </Button>
      </div> */}
                <div className="action-section">
            <div className="action-card">
              <h3>Your adventure awaits ✨</h3>
              <p>Secure your spot before seats run out</p>
              <Button className="btn-book" onClick={handleBooking}>Book Now</Button>
            </div>

            <div className="action-card">
              <h3>Help us improve 💬</h3>
              <p>Share your review or feedback with us</p>
              <Button className="btn-review">Add Review</Button>
            </div>
          </div>
      <AddReview open={open} onClose={() => setOpen(false)} tourid={data._id} />
      <Footer />
    </div>
  );
};

export default TourClicked;
