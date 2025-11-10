import React from "react";
import Navbar from "../components/Navbar";
import DropDown from "../components/DropDown";
import MyAnalogClock from "../components/Clock";
import RowRadioButtonsGroup from "../components/RadioButton";
import { CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MailModal from "../components/MailModal";
import InOutTable from "../components/InOutTable";
import InModal from "../components/InModal";
import StockListLocation from "../components/LocationModal";
import MjpDropDown from "../components/MjpDropdown";
import data from "./data.json"

  
const HomeTest = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, []);
  
  // const [currLocation, setCurrLocation] = useState({});
  // const handleLocation = useEffect(() => {
  //   getLocation();
    
  // }, []);

  // const getLocation = async () => {
  //   const Location = await axios.get("https://ipapi.co/json");
  //   setCurrLocation(Location.data);
  // };

  const [outButtonClickTime, setOutButtonClickTime] = useState(null);
  const handleOutButtonClick = () => {
    setOutButtonClickTime(new Date());
  };

  const handleLinkClick = () =>{
    return(
    <InOutTable/>
    )
  }

  return (
    <>
      <div className="navbar" style={{ display: "flex" }}>
        <Navbar />
        <div style={{ display: "flex", alignItems: "center" }}>
          <MjpDropDown />
          <label style={{paddingTop: "20px"}}>Welcome:<PersonIcon /></label>  
          <DropDown />
        </div>
      </div>
      <div class="flex-container">
        <div style={{ width: "50%" }}>
          <card variant="outlined">
            <CardContent>
              <div className="home">
                <div className="main-container">
                  {/* Left Grid */}
                  <div className="left-grid">
                    {/* Label and Button */}
                    <div
                      className="label-button-container"
                      style={{ width: "100%" }}
                    >
                      <label style={{ width: "50%" }}>
                        Employee Attendance
                      </label>
                      <StockListLocation/>
                    </div>

                    {/* Radio Buttons */}
                    <div className="radio-buttons-container">
                      <RowRadioButtonsGroup />
                    </div>

                    <div className="clocks-container">
                      <MyAnalogClock />
                    </div>
                    
                    {/* Remark Section */}
                    <div className="remark-container">
                      <label style={{ marginRight: "10px" }}>Remark </label>
                      <input
                        type="text"
                        style={{ marginTop: "10px", marginRight: "5px"}}
                      />
                      <div style={{marginTop: "5px", marginBottom: "5px", display: "flex", alignItems: "center"}}>
                        <InModal />                          
                      <Button variant="contained" size="small">
                        out
                      </Button>
                      </div>
                    </div>

                    <div className="last-updated-container">
                      <label>Last Updated By:</label> <br />
                      <label>Activity:</label>
                      <br />
                      <label>Login: </label>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </card>
        </div>
        <div style={{ width: "50%" }}>
          {/* Right Card */}
          <card>
            <CardContent>
              <div className="label-button-container" style={{ width: "100%" }}>
                <label
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    Attendance Details
                    <MailModal />
                    
                  </div>
                  <div style={{ width: "50%" }}>
                    
                  </div>
                </label>
              </div>

              <div className="right-grid" style={{ display: "flex" }}>
              <TableContainer component={Paper} style={{ maxHeight: 400 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Activity Type</TableCell>
            <TableCell>User Code</TableCell>
            <TableCell>Attendance</TableCell>
            <TableCell>In Time</TableCell>
            <TableCell>Out Time</TableCell>
            <TableCell>Remark</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((employee, index) => (
            <TableRow key={index}>
              <TableCell>
                <Link
                  href="#"
                  onClick={handleLinkClick}
                  style={{
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '100%',
                  }}
                >
                  {employee.date}
                </Link>
              </TableCell>
              <TableCell>{employee.activityType}</TableCell>
              <TableCell>{employee.userCode}</TableCell>
              <TableCell>{employee.attendance}</TableCell>
              <TableCell>{employee.inTime}</TableCell>
              <TableCell>{employee.outTime}</TableCell>
              <TableCell>{employee.remark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </div>
            </CardContent>
          </card>
        </div>
      </div>
    </>
  );
};

export default HomeTest;
