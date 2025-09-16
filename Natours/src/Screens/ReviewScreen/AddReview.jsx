import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Rating,
  Button,
} from "@mui/material";
import { addReview } from "../../Services/reviewService";
import CoustomModal from "../Modal";

const AddReview = ({ open, tourid, onClose }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [shouldNavigate, setShouldNavigate] = useState(false);

  const handleSubmit = async (tourid, text, rating) => {
    try {
      const rat = Math.floor(rating);
      const res = await addReview(tourid, text, rat);

      if (res) {
        onClose(); // close modal after update
        setModalMessage("🎉 Review updated Successfully!");
        setModalOpen(true);
        setShouldNavigate(true)
        // window.location.reload();
      }
    } catch (err) {
      alert(err.response.data.message);
      setModalMessage("❌ Review update Failed! " + err.response.data.message);
      setModalOpen(true);
      console.error("Review update failed", err.response.data.message);
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
            value={Number(rating)}
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
              onClick={() => handleSubmit(tourid, text, rating)}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
      <CoustomModal
        openModal={modalOpen}
        setOpenModal={setModalOpen}
        message={modalMessage}
        shouldNavigate={shouldNavigate}
        navigate={() => window.location.reload()}
      />
    </div>
  );
};

export default AddReview;
