import React from 'react'
import Card from 'react-bootstrap/Card';
import './Tweet.css'

const Tweet = (props) => {
	if(props.media !== ''){
		return(
			<Card style={{ width: '40rem' }}>
			  <Card.Body>
			    <Card.Title>
			    	<div className="title">
				    	<img src={props.profile_image} className="profile-img"/>
				    	{props.name}
				    	<h2>{'@'+props.userName}</h2>
			    	</div>
			    </Card.Title>
			    <Card.Text>
			      {props.text}
			      <img src={props.media.toString()} className="media-img" />
			      {props.retweetCount}
			    </Card.Text>
			  </Card.Body>
			</Card>
	 );
	} else {
		return(
			<Card style={{ width: '40rem' }}>
			  <Card.Body>
			    <Card.Title>
			      <div className="title">
			    	<img src={props.profile_image} className="profile-img"/>
			    	{props.name}
			    	<h2>{'@'+props.userName}</h2>
			      </div>
			    </Card.Title>
			    <Card.Text>
			      {props.text}
			      <br></br>
			      {props.retweetCount}
			    </Card.Text>
			  </Card.Body>
			</Card>
	 );
	}		
}

export default Tweet