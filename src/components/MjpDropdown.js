import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';



const MjpDropDown = () => {

  const navigate = useNavigate()
    const handleChange = (event) => {

    };
  
    return (
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">MJP</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"

            onChange={handleChange}
            label="MJP"
          >
             <MenuItem onClick={()=>{
              navigate('/listattendance')
            }}>List Attendance</MenuItem>

             <MenuItem onClick={()=>{
              navigate('/listmjpdsr')
            }}>List MJP DSR</MenuItem>

            <MenuItem onClick={()=>{
              navigate('/tada')
            }}>List TA/DA</MenuItem>

             <MenuItem onClick={()=>{
              navigate('/spuriousproducts')
            }}>Spurious Products</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
}

export default MjpDropDown