import React from 'react';
import AnalogClock from 'analog-clock-react';



const MyAnalogClock = () => {
    
  const options = {
    width: '200px',
    border: true,
    borderColor: '#333',
    baseColor: '#333',
    centerColor: '#fff',
    handColors: {
      second: '#d81c7a',
      minute: '#fff',
      hour: '#fff'
    },
  };

  return (
    <div>
      <AnalogClock {...options} />
    </div>
  );
};

export default MyAnalogClock;
