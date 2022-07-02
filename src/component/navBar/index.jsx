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

      <Nav.Link className='mx-2' as ={Link} to='/'>
             NavBar
            </Nav.Link>

          <Nav className="ms-auto">

          <Nav.Link className='mx-2' as ={Link} to='/'>
            Home
            </Nav.Link>


            <Nav.Link className='mx-2' as ={Link} to='/about'>
            About
            </Nav.Link>

            <Nav.Link className='mx-2' as ={Link} to='/shop'>
             Shop
            </Nav.Link>

            <Nav.Link className='mx-2' as ={Link} to='/counter'>
             Counter
            </Nav.Link>

            <Nav.Link className='mx-2' as ={Link} to='/todo'>
             Todo-list
            </Nav.Link>

            <Nav.Link className='mx-2' as ={Link} to='/register'>
             Register
            </Nav.Link>

          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;