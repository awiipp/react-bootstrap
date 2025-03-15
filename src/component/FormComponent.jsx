import React from 'react';
import { Button, Form } from 'react-bootstrap';

const FormComponent = () => {
  return (
    <Form>
      {/* Form Group: buat bikin 1 input lengkap */}
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
        <Form.Text className="text-danger">* Invalid field</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Telephone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Telephone Number" />
      </Form.Group>

      <Button variant="warning" type="submit" className="mt-2">
        Supmit
      </Button>
    </Form>
  );
};

export default FormComponent;
