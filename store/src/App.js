import React, { useState } from 'react';
import { Navbar, Form, Nav, Button, Jumbotron, FormControl } from 'react-bootstrap'
import './App.css';
import Data from './data.js'
import Detail from './Detail.js'

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, shoes변경] = useState([Data])
  return (
    <div className="App">

      <>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link ><Link to="/"><h3>Phone</h3></Link></Nav.Link>


            <Nav.Link><Link to="/Detail">Apple</Link></Nav.Link>

            <Nav.Link href="#Galaxy">Galaxy</Nav.Link>
            <Nav.Link href="#LG">LG</Nav.Link>
            <Nav.Link href="#myPags">Login</Nav.Link>
            <Nav.Link href="#work">고객센터</Nav.Link>
          </Nav>

        </Navbar>
        <br />

      </>

      <Switch>

        <Route exact path="/">

          <Jumbotron className="background">
            <h1>Hi</h1>

          </Jumbotron>
          <div className="container">
            <div className="row">
              {
                /* shose.map((a,i)=>{
                   return  <Card shoes={shoes[i]}  i={i} key={}/> a
                 }
                 )*/
              }
              <Card shoes={shoes[0]} />
              <Card shoes={shoes[1]} />
              <Card shoes={shoes[2]} />

            </div>
          </div>

        </Route>
        <Route exact path="/datail">
          <Detail />
        </Route>

        <Route path="/ :id">
          <div>아무거나 적었을떄 보여주세요</div>
        </Route>

      </Switch>



    </div>




  );
}

function Card(props) {
  return (
    <div className="col-md-6">
      <img src={"https://codingapple1.github.io/shop/shoes1" + /*props.i+1) +*/".jpg"} width="100%" />
      <h4>상품명</h4>
      <p>가격</p>
    </div>
  )
}

export default App;
