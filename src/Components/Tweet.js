import React from 'react'
import Card from 'react-bootstrap/Card';
import './Tweet.css'

const Tweet = (props) => {
	console.log(props)
		return(
			<Card style={{ width: '40rem' }}>
			  <Card.Body>
			    <Card.Title><img src={props.profile_image}/>{props.name}</Card.Title>
			    <Card.Text>
			      {props.text}
			    </Card.Text>
			    <Card.Link href="#">Card Link</Card.Link>
			    <Card.Link href="#">Another Link</Card.Link>
			  </Card.Body>
			</Card>
	 );
}

export default Tweet