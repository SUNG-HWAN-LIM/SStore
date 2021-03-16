import React, { useState } from 'react';
import { Navbar, Form, Nav, Button, Jumbotron, FormControl } from 'react-bootstrap'
import './App.css';

function App() {

  let [shoes, shoes변경] = useState([])
  return (
    <div className="App">

      <>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><h3>Phone</h3></Nav.Link>
            <Nav.Link href="#Apple">Apple</Nav.Link>
            <Nav.Link href="#Galaxy">Galaxy</Nav.Link>
            <Nav.Link href="#LG">LG</Nav.Link>
            <Nav.Link href="#myPags">Login</Nav.Link>
            <Nav.Link href="#work">고객센터</Nav.Link>
          </Nav>
    
        </Navbar>
        <br />

      </>

      <Jumbotron className="background">
        <h1>?</h1>

      </Jumbotron>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 가격</p>
          </div>
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 가격</p>
          </div>
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 가격</p>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>




    </div>
  );
}

export default App;
