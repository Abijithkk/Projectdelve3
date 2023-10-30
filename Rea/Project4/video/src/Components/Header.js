import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';



function Header() {
  return (
    <>
    <Navbar className=" w-100">
      <Container>
        <Link to={'/'} style={{textDecoration:"none"}}>
        <Navbar.Brand >
          <img
            alt=""
            src="https://i.postimg.cc/4xQcDQnM/pngwing-com.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        <b> Video Uploader</b> 
        </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  </>
  )
}

export default Header