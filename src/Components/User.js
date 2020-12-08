import React from 'react'
import Card from 'react-bootstrap/Card';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const User = (props) => {
	if(props.media !== ''){
	  return(
		<Card style={{ width: '40rem' }}>
		  <Card.Body>
		    <Card.Title>

		    </Card.Title>
		    <Card.Text>
			 
		    </Card.Text>
		  </Card.Body>
		</Card>
	 );	
}

export default User