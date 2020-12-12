import React from 'react'
import './RandomButton.css'
import Tweet from './Tweet.js'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import User from './User.js'

const RandomButton = (props) => {
	console.log(props)
	let profiles = [];
	props.user_result.forEach((profile) => {
		profiles.push(
				<User 
	   				profile_image={profile.profile_image_url_https}
	   				background_image={profile.profile_banner_url}
	   				name={profile.name}
	   				user_name={profile.screen_name}
	   				description={profile.description}
	   				location={profile.location}
	   				// url_display={urlDisplay}
	   				// href={url}
	   				joined={profile.created_at}
	   				following={profile.friends_count}
	   				followers={profile.followers_count}
	   				className={"user-card"}/>
				)
	})
	return (
		<div className="card-container-profiles">
			{profiles}
		</div>
	);
}

export default RandomButton
