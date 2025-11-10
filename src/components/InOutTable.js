import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

const InOutTable = ({isOpen , closeCallback}) => {

  return (
    <div>
      <Modal open={isOpen} onClose={closeCallback}>
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
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            In & Out Location
          </Typography>

          {/* Table */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>In Location</TableCell>
                  <TableCell>Out Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Row 1 - In Location */}
                <TableRow>
                  <TableCell>2023-12-01</TableCell>
                  <TableCell>Location A</TableCell>
                  <TableCell></TableCell>
                </TableRow>

                {/* Row 2 - Out Location */}
                <TableRow>
                  <TableCell>2023-12-02</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Location B</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
};

export default InOutTable;
