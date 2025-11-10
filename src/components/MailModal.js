import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const MailModal = () => {
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
         Mail
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
          <Typography variant="h4" sx={{ marginLeft: 5 }}>
            Mail
          </Typography>

          {/* Form */}
          <Box sx={{ backgroundColor: '#e0f7fa', padding: 2 }}>
            <form>
              <div>
                <TextField label="HQCode" variant="outlined" margin="dense" fullWidth />
              </div>
              <div>
                <TextField label="HQName" variant="outlined" margin="dense" fullWidth />
              </div>
              <div>
                <TextField label="Employee Code" variant="outlined" margin="dense" fullWidth />
              </div>
              <div>
                <TextField label="Employee Name" variant="outlined" margin="dense" fullWidth />
              </div>
              <div>
                <TextField label="Designation" variant="outlined" margin="dense" fullWidth />
              </div>
            </form>
          </Box>

          {/* To and Cc */}
          <Box sx={{ display: 'flex', marginTop: 2 }}>
            <Typography sx={{ marginRight: 1 }}>To:</Typography>
            <TextField label="To" variant="outlined" margin="dense" sx={{ marginRight: 1 }} />
            <Typography sx={{ marginRight: 1 }}>Cc:</Typography>
            <TextField label="Cc" variant="outlined" margin="dense" />
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
              Send
              <SendIcon sx={{ marginLeft: 1 }} />
            </Button>
            <IconButton onClick={handleClose} sx={{ marginRight: 2 }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default MailModal;
