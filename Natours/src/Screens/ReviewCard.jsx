import React from "react";
import "./CssFiles/ReviewCard.css";

const ReviewCard = ({ review }) => {
  if (review !== null) console.log(review, "from review card");

  return (
    <div className="rev-card">
      <div className="rev-inner">
        <div className="img-container">
          <img
            src={`http://localhost:3000/img/users/${review.user.photo}`}
            alt={"userImage"}
            className="rev-img"
          />
        </div>
        <div className="rev_text">
          <h3 className="rev-name">{review.user.name}</h3>
          <p className="rev-description">{review.review}</p>
        </div>
        <div className="rev-stars">
          {" "}
          {"★".repeat(Math.floor(review.rating))}{"☆".repeat(Math.floor(5 - review.rating))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
