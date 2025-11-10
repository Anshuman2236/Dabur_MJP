import React, { useState } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';

const EmployeeDetailsModal = () => {
 const [show, setShow] = useState(false);
 const [employee, setEmployee] = useState({
    hqCode: '',
    employeeCode: '',
    designation: '',
    hqName: '',
    employeeName: '',
    email: '',
 });

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
 };

 const handleSubmit = (event) => {
    event.preventDefault();
    console.log(employee);
    handleClose();
 };

 return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridHqCode">
                <Form.Label>HQ Code</Form.Label>
                <Form.Control
                 type="text"
                 name="hqCode"
                 value={employee.hqCode}
                 onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmployeeCode">
                <Form.Label>Employee Code</Form.Label>
                <Form.Control
                 type="text"
                 name="employeeCode"
                 value={employee.employeeCode}
                 onChange={handleInputChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridDesignation">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                 type="text"
                 name="designation"
                 value={employee.designation}
                 onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHqName">
                <Form.Label>HQ Name</Form.Label>
                <Form.Control
                 type="text"
                 name="hqName"
                 value={employee.hqName}
                 onChange={handleInputChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmployeeName">
                <Form.Label>Employee Name</Form.Label>
                <Form.Control
                 type="text"
                 name="employeeName"
                 value={employee.employeeName}
                 onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                 type="email"
                 name="email"
                 value={employee.email}
                 onChange={handleInputChange}
                />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
 );
};

export default EmployeeDetailsModal;