import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import {Link} from "react-router-dom";
import Typewriter from 'typewriter-effect';



function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className='NAv_bg' variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('HELLO! I am Umar Farooq.')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      // .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start(true);
  }}
/>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav_li'><Link to="about" className='text-white text-decoration-none'> About</Link> </Nav.Link>
            <Nav.Link href="#pricing" className='nav_li'><Link to="ser" className='text-white text-decoration-none'> Services</Link></Nav.Link>
            <Nav.Link href="#pricing" className='nav_li'><Link to="contact" className='text-white text-decoration-none'> Contact</Link></Nav.Link>
           
          </Nav>
         
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
