import React, { useContext, useState } from "react";
import "../CssFiles/ReviewCard.css";
import { AuthContext } from "../../Contexts/AuthContext";
import { deleteReview } from "../../Services/reviewService";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditReview from "./EditReview";

const ReviewCard = ({ review }) => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleDelete = async (id) => {
    try {
      await deleteReview(id);
      window.location.reload(); // Reload to reflect changes
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };
  if (review !== null)
    return (
      <div className="rev-card">
        <div className="rev-inner">
          {/* {review&& console.log('Review ID:', review.id ,'Review _id:', review._id)} */}
            {review.user._id === user?.data?.data?._id ? (
                <div className="rev-edit-delete">
                  <button className="rev-edit" onClick={() => setOpen(true)}>
                    <FaEdit />
                  </button>
                  <button className="rev-delete" onClick={() => handleDelete(review._id)}>
                    <AiFillDelete />
                  </button>
                </div>
              ) : (
                <div className="rev-edit-delete invisible-placeholder">
                  <button className="rev-edit" disabled>
                    <FaEdit />
                  </button>
                  <button className="rev-delete" disabled>
                    <AiFillDelete />
                  </button>
                </div>
              )}
                

          <div className="img-container">
            <img
              src={review.user.photo?`/img/users/${review.user.photo}`:"https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"}
              
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
            {"★".repeat(Math.floor(review.rating))}
            {"☆".repeat(Math.floor(5 - review.rating))}
          </div>
        </div>
        <EditReview
          open={open}
          onClose={() => setOpen(false)}
          review={review}
        />
      </div>
    );
};

export default ReviewCard;
