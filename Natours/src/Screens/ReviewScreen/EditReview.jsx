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
import CustomModal from "../Modal";

const EditReview = ({ open, review, onClose }) => {
  const [text, setText] = useState(review.review);
  const [rating, setRating] = useState(review.rating);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [typepopup, setTypepopup] = useState("");

  const handleSubmit = async (id, text, rating) => {
    try {
      const rat = Math.floor(rating);
      const res = await editReview(id, text, rat);

      if (res) {
        onClose(); // close review modal after update
        setModalMessage("🎉 Review updated Successfully!");
        setTypepopup("Info");
        setModalOpen(true);
        setShouldNavigate(true);
        // window.location.reload();
      }
    } catch (err) {
      console.error("Review update failed", err);
      setModalMessage("❌ Review update Failed! " + (err.response?.data?.message || "Please try again."));
      setTypepopup("Alert");
      setModalOpen(true);
      setShouldNavigate(false);
    }
  };

  return (
    <div>
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
      <CustomModal
          typepopup={typepopup}
          openModal={modalOpen}
          setOpenModal={setModalOpen}
          message={modalMessage}
          shouldNavigate={shouldNavigate}
          navigate={() => window.location.reload()}
        />
    </div>
  );
};

export default EditReview;
