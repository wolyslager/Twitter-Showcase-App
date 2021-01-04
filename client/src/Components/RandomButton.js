import {React, useState} from 'react'
import './RandomButton.css'
import Tweet from './Tweet.js'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import User from './User.js'


const RandomButton = (props) => {
	const [show, setShow] = useState(false);
	let profiles = [];
	props.user_result.forEach((profile) => {
		profiles.push(
				<User 
	   				profile_image={profile[0].profile_image_url_https}
	   				background_image={profile[0].profile_banner_url}
	   				name={profile[0].name}
	   				user_name={profile[0].screen_name}
	   				description={profile[0].description}
	   				location={profile[0].location}
	   				// url_display={urlDisplay}
	   				// href={url}
	   				joined={profile[0].created_at}
	   				following={profile[0].friends_count}
	   				followers={profile[0].followers_count}
	   				tweets={profile[1]}
	   				caller={'random'}/>
				)
	})
	return (		
    	 <div className="card-container-profiles">
			{profiles}
		</div>
	);
}

export default RandomButton
