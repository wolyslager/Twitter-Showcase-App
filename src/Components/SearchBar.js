import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './SearchBar.css'

const SearchBar = (props) => {
	return(
		<InputGroup className="mb-3" style={{width:"35em"}}>
		    <FormControl
		      placeholder="Search for your favorite Twitter users..."
		      aria-label="Recipient's username"
		      aria-describedby="basic-addon2"
		      onChange={props.handleChange}
		    />
	    <InputGroup.Append>
	      <Button className="btn btn-primary" text="light" onClick={() => props.handleSubmit()}>Search</Button>
	    </InputGroup.Append>
	  </InputGroup>
	);
}

export default SearchBar;