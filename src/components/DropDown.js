import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import EmployeeDetailsModal from './AddViewEmpModal';

const handleAddViewClick = () =>{
  return <EmployeeDetailsModal />
}

let id = Math.floor(Math.random())

const DropDown = () => {

  const navigate = useNavigate()
    const handleChange = (event) => {

    };
  
    return (
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">UserId: {id}</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"

            onChange={handleChange}
            label="MJP"
          >
            <MenuItem onClick={()=>{
              navigate('/')
            }}>Logout</MenuItem>
            <MenuItem  onClick={handleAddViewClick}>Add/View Employee</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
}

export default DropDown