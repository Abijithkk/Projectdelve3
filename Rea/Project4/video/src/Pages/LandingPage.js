import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Landing.css'
import {Link} from 'react-router-dom'


function LandingPage() {
  return (
    <div className='bg-black'>
      <Container className='bg-black '>
       <Row>
        <Col>
        <div className='mt-3'>
          <h2>
            <b id='head'>Video Uploader</b>
          </h2>
          <p className='fs-5 mt-3 text-light'>
Social website for add,delete,watch and categorize videos according to your wish
          </p>
          <Link style={{textDecoration:'none'}} to={'/home'}>
          <Button className='black '><b className='blac'>Get started</b>
          <i class="fa-solid fa-play fa-beat-fade ms-3"style={{color:'red'}}></i></Button></Link>
          </div>
        </Col>
        <Col>
        <img className='mt-3' style={{width:'400px'}} src="https://i.postimg.cc/bv5Z1fPh/WKse.gif" alt="" />
        </Col>
        

       </Row>
       <hr className='text-light' />
<h3 className='text-danger text-center bl'>Features</h3>
       <Row className='mt-3'>
        <Col className='bg-black'>
        <Card  border="info"  style={{ width: '18rem' }}className='bg-black'>
      <Card.Img variant="top" src="https://i.postimg.cc/fytPrD4v/image-processing20211119-11332-k2kr5l.gif" />
      <Card.Body>
        <Card.Title className='text-light text-center'>Managing Videos</Card.Title>
        <hr className='text-danger' />
        <Card.Text  className='text-dark'>
         Upload,delete and edit video
        </Card.Text>
      
      </Card.Body>
    </Card>
        </Col>
        <Col className='bg-black'>
        <Card  border="info"  style={{ width: '18rem' }}className='bg-black'>
      <Card.Img variant="top" src="https://i.postimg.cc/K8XfmtLF/image-processing20210831-6433-k2kwwm.gif" />
      <Card.Body>
        <Card.Title className='text-light text-center'>Categorize Videos</Card.Title>
        <hr className='text-danger' />
        <Card.Text  className='text-dark'>
          Categorize Videos according to your 
        </Card.Text>
    
      </Card.Body>
    </Card>
        </Col>
        <Col  className='bg-black'>
        <Card  border="info"  style={{ width: '18rem' }}className='bg-black'>
      <Card.Img  variant="top" src="https://i.postimg.cc/HWFshYcc/701b0058686e888625649473767e8b90.gif" />
      <Card.Body>
        <Card.Title className='text-light text-center'>Watch History</Card.Title>
        <hr className='text-danger' />
        <Card.Text className='text-dark'>
         You can see the watch history
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Col>
       </Row>
      </Container>
    </div>
  )
}

export default LandingPage