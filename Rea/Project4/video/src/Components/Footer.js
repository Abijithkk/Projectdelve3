import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

function Footer() {
  return (
   
    <div style={{backgroundColor:'white'}} className='Footer p-5  w-100 mt-3'>
     
        <Row className='Footer'>
          <Col lg={3} md={6} sm={12} xs={12}>
          <img src="https://i.postimg.cc/4xQcDQnM/pngwing-com.png" width="20"
          height="20" className='d-inline-block align-top me-1 ' alt="" />{' '}
          <b className='fs-5'>Video Uploader</b>
          <h6 className='mt-2 pt-2 text-black'>Edit Add and Delete Videos </h6>
          
          
          </Col>

          <Col lg={3} md={6} sm={12} xs={12} className=' Footer ps-3 '>
            <h4 > <b>Links</b></h4>
            <a className='fs-5'style={{textDecoration:'none',color:'blue'}} href="./LandingPage.js">Landing Page</a><br />
            <a className='fs-5 'style={{textDecoration:'none',color:'blue'}} href="./Home.js">Home</a><br />
            {/* <a className='fs-5'style={{textDecoration:'none',color:'red'}} href="">Watch History</a> */}
         </Col>
         <Col className='Footer' lg={3} md={6} sm={12} xs={12}>
         <h4><b>Guides</b>
         </h4>
         <h5>react</h5>
         <h5>react bootstrap</h5>
         <h5>routing</h5>
         </Col>
         <Col className='Footer' lg={3} md={6} sm={12} xs={12}>
          <h4><b>Contact us</b> </h4>
          <input type="text" placeholder='enter email' /><br />
          <i  class="fa-brands fa-instagram mt-3 fs-4"></i>
          <i class="fa-brands fa-facebook fs-4 p-3"></i>
          <i class="fa-brands fa-github fs-4 "></i>
          <i class="fa-solid fa-envelope fs-4 p-3"></i>
         </Col>
         
         
        </Row>
      
    </div>
    
 
  )
}

export default Footer