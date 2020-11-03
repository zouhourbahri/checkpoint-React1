import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Form,Button} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--YvgPKF4Z--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/5crsydn14wmxeub5b2qr.jpg"
        width="80"
        height="50"
        className="d-inline-block align-top"
      />{' '}
      <span className="navigation">React Bootstrap</span>
    </Navbar.Brand>
  </Navbar>
</>
     <Form className="position">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Button variant="primary" type="submit" className="cancelation">
    Cancel
  </Button>
</Form>
<footer className="foot">
  <span className="copy">
    copy right 2020 
  </span>
</footer>
    </div>
  );
}

export default App;
