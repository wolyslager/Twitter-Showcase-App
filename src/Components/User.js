import React from 'react'
import Card from 'react-bootstrap/Card';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faLink} from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons'


const User = (props) => {
	if(props.media !== ''){
	  return(
		<Card style={{ width: '40rem', height: '30rem'}} className="pt-0 card-container">
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
	 );	
	}
 }

export default User