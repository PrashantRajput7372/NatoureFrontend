import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Rating,
  Button,
} from "@mui/material";
import { editReview } from "../../Services/reviewService";

const EditReview = ({ open, review, onClose }) => {
  const [text, setText] = useState(review.review);
  const [rating, setRating] = useState(review.rating);

  const handleSubmit = async (id, text, rating) => {
    try {
      const rat = Math.floor(rating);
      const res = await editReview(id, text, rat);

      if (res) {
        onClose(); // close modal after update
        window.location.reload();
      }
    } catch (err) {
      console.error("Review update failed", err);
    }
  };

  return (
    <div>
      {console.log(review)}
      {console.log(rating)}
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            width: 400,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Edit Your Review
          </Typography>

          <Rating
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Your review"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{ mt: 2 }}
          />

          <Box display="flex" justifyContent="flex-end" gap={1} mt={3}>
            <Button onClick={onClose} variant="outlined" color="secondary">
              Cancel
            </Button>
            <Button
              onClick={() => handleSubmit(review.id, text, rating)}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default EditReview;
