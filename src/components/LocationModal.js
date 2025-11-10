import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from 'axios';

const StockListLocation = () => {
  const [location, setLocation] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLocationModal = () => {
    setIsModalOpen(true);
  };

  const closeLocationModal = () => {
    setIsModalOpen(false);
  };

  const getLocation = async () => {
    try {
      const response = await axios.get("https://ipapi.co/json");
      const locationData = response.data;
      setLocation(`City: ${locationData.city}\nRegion: ${locationData.region}\nCountry: ${locationData.country_name}`);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={openLocationModal}>
        StockList Location
      </Button>

      <Modal open={isModalOpen} onClose={closeLocationModal}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '20px',
        }}>
          <TextareaAutosize
            rowsMin={4}
            placeholder="Location"
            value={location}
            readOnly
          />
          <Button variant="contained" color="primary" onClick={getLocation}>
            Get Location
          </Button>
          <Button variant="contained" color="primary" onClick={closeLocationModal}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default StockListLocation;
