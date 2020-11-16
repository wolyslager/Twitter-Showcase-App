import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './SearchBar.css'

const NavbarComp = () => {
	return(
		<div>
		  <Navbar bg="primary" variant="dark">
			    <Navbar.Brand href="#home">Twitter API App</Navbar.Brand>
			    <Nav className="mr-auto">
			      <Nav.Link href="#home">Home</Nav.Link>
			      <Nav.Link href="#features">Find Tweets</Nav.Link>
			      <Nav.Link href="#pricing">Roll The Dice</Nav.Link>
			    </Nav>
			    <Form inline>
			      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
			      <Button variant="outline-light">Search</Button>
			    </Form>
		  </Navbar>
	  </div>
	);
}

export default NavbarComp;