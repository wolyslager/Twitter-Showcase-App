import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

import './SearchBar.css'

const NavbarComp = (props) => {
	return(
		<div className="navbar-container">
		  <Navbar bg="dark" variant="dark">
			    <Navbar.Brand href="#home">
			    	<FontAwesomeIcon icon={faTwitterSquare} style= {{color: "#007bff"}} className="fa-lg"onClick={() => props.changeTabs(1)} />
			    </Navbar.Brand>
			    <Nav className="mr-auto">
			      <Nav.Link className="tab" onClick={() => props.changeTabs(1)}>Home</Nav.Link>
			      <Nav.Link className="tab" onClick={() => props.changeTabs(2)}>Find Tweets</Nav.Link>
			      <Nav.Link className="tab" onClick={() => props.changeTabs(3)}>Roll The Dice</Nav.Link>
			    </Nav>
		  </Navbar>
	  </div>
	);
}

export default NavbarComp;