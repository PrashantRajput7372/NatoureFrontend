// Modal.jsx
import React from 'react';
import { Modal, Button } from '@mui/material';
import "./CssFiles/Modal.css"


export default function CustomModal({ openModal, setOpenModal , message,shouldNavigate,typepopup, navigate}) {
  const handleClose = () => {
    setOpenModal(false);
    
    if( shouldNavigate) {
        navigate();
      }; 
  };

   //options to auto navigate after few seconds
  // setTimeout(() => {
 //       if (shouldNavigate) navigate("/");
//     }, 3000);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
    >
      
      <div className='parent_div'>
        
      <div className='head_div'style={
          typepopup === "Info"
            ? { color: "blue", fontWeight: "bold",fontFamily:"Arial" }
            : typepopup === "Alert"
            ? { color: "red",fontWeight: "bold",fontFamily:"Arial" }
            : {
                background: "linear-gradient(to right, #007bff, #e40f7a)",
                fontWeight: "bold",
                fontFamily:"Arial",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }
        }>{typepopup}</div>
      <div>{message}</div>
      <div className='btn'><Button variant="contained" onClick={handleClose}>
        Close</Button></div>
        </div>
        
    </Modal>
  );
}
