import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';


export default function RowRadioButtonsGroup({ updateState}) {
  const [selectedRadio, setSelectedRadio] = useState('');

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
    updateState(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedRadio}
        onChange={handleRadioChange}
      >
        <FormControlLabel value="market work" control={<Radio />} label="Market Work" />
        <FormControlLabel value="leave" control={<Radio />} label="Leave" />
        <FormControlLabel value="holiday" control={<Radio />} label="Holiday" />
        <FormControlLabel value="week off" control={<Radio />} label="Week Off" />
      </RadioGroup>
      <p>Selected Radio: {selectedRadio}</p>
    </FormControl>
  );
}
