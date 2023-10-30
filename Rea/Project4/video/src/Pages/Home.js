import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Add from "../Components/Add";
import View from "../Components/View";
import Categories from "../Components/Categories";
import './Home.css'
import { Link } from "react-router-dom";



function Home() {
  // state for state lifting
  const [addUpdate,setAddUpdate]=useState({})
  return (
    <div >
      <h2 className="  ps-5 text-light">Start Uploading videos for free</h2>
      <div  className="mt-4">
       <Link to={'/watch-history'} style={{textDecoration:'none'}}> <Col>
      <i class="fa-solid fa-clock fa-spin text-white ms-5"></i>
        <a className=""  style={{textDecoration:'none'}} href="">View Watch History</a>
        </Col>
        </Link>
        
      </div>
      <Row className="text-white mt-3">

        <Col lg={2}>
          <Add update={setAddUpdate}></Add>
        </Col>
        <Col lg={6}>
          <View updatedstate={addUpdate}></View>
        </Col>
        <Col lg={4}>
         <Categories></Categories>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
