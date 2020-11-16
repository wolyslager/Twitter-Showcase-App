import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './SearchBar.css'

const NavbarComp = (props) => {
	return(
		<div>
		  <Navbar bg="primary" variant="dark">
			    <Navbar.Brand href="#home">Twitter API App</Navbar.Brand>
			    <Nav className="mr-auto">
			      <Nav.Link onClick={() => props.changeTabs(1)}>Home</Nav.Link>
			      <Nav.Link onClick={() => props.changeTabs(2)}>Find Tweets</Nav.Link>
			      <Nav.Link >Roll The Dice</Nav.Link>
			    </Nav>
		  </Navbar>
	  </div>
	);
}

export default NavbarComp;