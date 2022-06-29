import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import React from 'react';
import './nav.css'

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>

      <Nav.Link className='mx-2'>
            <Link to='/'>NavBar</Link>
            </Nav.Link>

          <Nav className="ms-auto">
            <Nav.Link className='mx-2'>
            <Link to='/'>Home</Link>
            </Nav.Link>

            <Nav.Link className='mx-2'>
            <Link to='/about'>About</Link>
            </Nav.Link>

           <Nav.Link className='mx-2'>
            <Link to='/shop'>Shop</Link>
            </Nav.Link>

           <Nav.Link className='mx-2'>
            <Link to='/state'>Counter</Link>
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;