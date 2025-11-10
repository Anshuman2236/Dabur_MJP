import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  MenuItem,
  Select,
  FormControl,
  InputLabel, // Make sure this import is correct
} from "@mui/material";

const AttendanceTable = ({ data }) => {
  const [filter, setFilter] = useState("all"); // 'all' for showing all data

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter((employee) => {
    if (filter === "all") {
      return true;
    }

    const currentDate = new Date();
    const employeeDate = new Date(employee.date);

    if (filter === "current") {
      return (
        employeeDate.getMonth() === currentDate.getMonth() &&
        employeeDate.getFullYear() === currentDate.getFullYear()
      );
    }

    if (filter === "lastTwoMonths") {
      const lastTwoMonths = new Date();
      lastTwoMonths.setMonth(currentDate.getMonth() - 2);
      return employeeDate >= lastTwoMonths;
    }

    return true;
  });

  return (
    <div>
      <FormControl>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="current">Current Month</MenuItem>
          <MenuItem value="lastTwoMonths">Last Two Months</MenuItem>
        </Select>
      </FormControl>

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
            {filteredData.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link
                    href="#"
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
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
  );
};

export default AttendanceTable;
