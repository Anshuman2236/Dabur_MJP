import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Navbar from '../components/Navbar';

const styles = {
  root: {
    width: '100%',
    marginTop: 16, // You can use a number directly instead of theme.spacing(3)
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

const data = [
  {
    activityDate: '01-November-2018',
    userCode: 'N2028605',
    activityType: 'Holiday',
    plannedTown: 'faridabad',
    remarkPlanned: 'hgughgf',
  },
  {
    activityDate: '02-November-2018',
    userCode: 'N2028605',
    activityType: 'Others',
    plannedTown: 'gaziabad',
    remarkPlanned: 'dddtd',
  },
];

class CustomizedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 10,
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { page, rowsPerPage } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <>
      <Navbar />
      <Paper style={styles.root}>
        <Table style={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Activity Date</TableCell>
              <TableCell>User Code</TableCell>
              <TableCell>Activity Type</TableCell>
              <TableCell>Planned Town</TableCell>
              <TableCell>Remark Planned</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n) => {
              return (
                <TableRow key={n.activityDate}>
                  <TableCell component="th" scope="row">
                    {n.activityDate}
                  </TableCell>
                  <TableCell>{n.userCode}</TableCell>
                  <TableCell>{n.activityType}</TableCell>
                  <TableCell>{n.plannedTown}</TableCell>
                  <TableCell>{n.remarkPlanned}</TableCell>
                  <TableCell>{}</TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 49 * emptyRows }}>
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
      </>
    );
  }
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default CustomizedTable;
