import {React, useState} from 'react'
import Card from 'react-bootstrap/Card';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faLink} from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Tweet from './Tweet.js'

const User = (props) => {
	console.log(props)
	let tweetArray = [];
	let media;
	let urlDisplay;
	let url;
	const [show, setShow] = useState(false);
	//generate tweets array if being called by random page
	if(props.caller == 'random'){
		props.tweets.statuses.forEach((result) => {
			if(result.entities.media){
				media = result.entities.media[0].media_url;
			} else {
				media = '';
			}
			tweetArray.push(
			  <Tweet 
				text={result.full_text} 
				name={result.user.name} 
				profile_image={result.user.profile_image_url}
				media={media}
				userName={result.user.screen_name}
				retweetCount={result.retweet_count}
				favoriteCount={result.favorite_count}/>
			)
		})
	}
	
	if(props.media !== ''){
	  return(
	  	<div>
			<Card style={{ width: '40rem', height: '30rem'}} className="pt-0 card-container" onClick={() => setShow(true)}>
			  <Card.Body>
			    <Card.Title>
			    	<img src={props.background_image} style={{width: '40rem'}} className="background-img"/>
			    	<img src={props.profile_image} style={{width: '6rem', height: '6rem'}} className="profile-img-user"/>
			    	<h1 className="user-title">{props.name}</h1>
			    	<h2 className="username">{'@'+props.user_name}</h2>
			    	<h2 className="description">{props.description}</h2>
			    	<div className="user-info-container">
				    	<FontAwesomeIcon 
				    		icon={faMapMarkerAlt} 
				    		style={{color: "#FFFFFF"}} 
				    		className="fa-lg location"/>
				    	<h3 className="user-location">{props.location}</h3>
				    	<FontAwesomeIcon 
				    		icon={faLink} 
				    		style={{color: "#FFFFFF"}} 
				    		className="fa-lg location"/>
				    	<a className="user-url" href={props.href}>{props.url_display}</a>
				    	<FontAwesomeIcon 
				    		icon={faCalendarAlt} 
				    		style={{color: "#FFFFFF"}} 
				    		className="fa-sm calendar"/>
				    	<h3 className="joined">
				    		{'Joined '+ props.joined.slice(4,10) + ' ' + props.joined.slice(26,30)}
				    	</h3>
			    	</div>
			    	<div className='followers'>
			    		<h3 className="following-count">{props.following}</h3>
			    		<h3 className="following-text"> Following</h3>
			    		<h3 className="follower-count">{props.followers}</h3>
			    		<h3 className="follower-text"> Followers</h3>
			    	</div>
			    </Card.Title>
			    <Card.Text>
			    </Card.Text>
			  </Card.Body>
			</Card>
			<>
		      <Modal
		        show={show}
		        onHide={() => setShow(false)}
		        size="lg"
		        dialogClassName="modal-50w"
		        aria-labelledby="example-custom-modal-styling-title"
		        style={{display: 'flex', justifyContent: 'center'}}
		      >
		        <Modal.Header closeButton>
		        </Modal.Header>
		        <Modal.Body>
		          <p className="tweet-container-modal">
		            {tweetArray}
		          </p>
		        </Modal.Body>
		      </Modal>
		    </>
	    </div>
	 );	
	}
 }

export default User