import React from 'react'
import Card from 'react-bootstrap/Card';
import './Tweet.css'

const Tweet = (props) => {
	console.log("Media", props.media)
	if(props.media !== ''){
		return(
			<Card style={{ width: '40rem' }}>
			  <Card.Body>
			    <Card.Title><img src={props.profile_image} class="profile-img"/>{props.name}</Card.Title>
			    <Card.Text>
			      {props.text}
			      <img src={props.media.toString()} class="media-img" />
			    </Card.Text>
			  </Card.Body>
			</Card>
	 );
	} else {
		return(
			<Card style={{ width: '40rem' }}>
			  <Card.Body>
			    <Card.Title><img src={props.profile_image} class="profile-img"/>{props.name}</Card.Title>
			    <Card.Text>
			      {props.text}
			    </Card.Text>
			  </Card.Body>
			</Card>
	 );
	}		
}

export default Tweet