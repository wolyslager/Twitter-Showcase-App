import React from 'react'
import Card from 'react-bootstrap/Card';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const User = (props) => {
	if(props.media !== ''){
	  return(
		<Card style={{ width: '40rem', height: '30rem'}} className="pt-0 card-container">
		  <Card.Body>
		  	<img src={props.background_image} style={{width: '40rem'}} className="background-img"/>
		    <Card.Title>
		    	
		    </Card.Title>
		    <Card.Text>
			 
		    </Card.Text>
		  </Card.Body>
		</Card>
	 );	
	}
 }

export default User