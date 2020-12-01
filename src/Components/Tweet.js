import React from 'react'
import Card from 'react-bootstrap/Card';
import './Tweet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

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
				   <br></br>
				   <br></br>
				   <div className="twitter-footer">
				      <FontAwesomeIcon icon={faRetweet} className="fa-lg retweet"/>
				      {props.retweetCount}
				      <FontAwesomeIcon icon={faHeart} className="fa-lg favorite"/>
				      {props.favoriteCount}
			       </div>
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
			      <br></br>
			      <div className="twitter-footer">
				      <FontAwesomeIcon icon={faRetweet} className="fa-lg retweet"/>
				      {props.retweetCount}
				      <FontAwesomeIcon icon={faHeart} className="fa-lg favorite"/>
				      {props.favoriteCount}
			       </div>
			    </Card.Text>
			  </Card.Body>
			</Card>
	 );
	}		
}

export default Tweet