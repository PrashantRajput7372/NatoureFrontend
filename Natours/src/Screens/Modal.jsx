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
        {/* <div style={{backgroundColor:"red",height:"auto",width:"100%"}}> */}
      <div className='head_div'> {typepopup}</div>
        {/* </div> */}
        <div className='divider'></div>
      <div className='msg'>{message}</div>
      <div className='btn'><Button variant="contained" onClick={handleClose}>
        Close</Button></div>
        </div>
        
    </Modal>
  );
}
