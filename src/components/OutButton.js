import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const OutButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Out
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'white',
            borderRadius: 8,
            padding: 2,
          }}
        >
          {/* Heading */}
          <Typography variant="h3" sx={{ backgroundColor: 'blue', color: 'white', padding: 2 }}>
            Do you want to submit the attendance?
          </Typography>

          {/* Content */}
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1" component="p">
              <strong>InLocation</strong> Latitude: [Your Latitude], Longitude: [Your Longitude]
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <Button variant="contained" color="error" sx={{ marginRight: 2 }}>
              Yes
            </Button>
            <Button variant="outlined" color="default" onClick={handleClose}>
              No
            </Button>
          </Box>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8, color: 'grey' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default OutButton;