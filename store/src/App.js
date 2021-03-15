import React, { useState } from 'react';
import { Navbar, Form, Nav, Button, Jumbotron, FormControl } from 'react-bootstrap'
import './App.css';

function App() {

  let [shoes, shoes변경] = useState([])
  return (
    <div className="App">

      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><h1>Store</h1></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><h3>home</h3></Nav.Link>
            <Nav.Link href="#features">Apple</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <br />

      </>

      <Jumbotron className="background">
        <h1>?</h1>

      </Jumbotron>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 가격</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 가격</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 가격</p>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>




    </div>
  );
}

export default App;
