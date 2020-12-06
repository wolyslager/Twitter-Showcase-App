import React from 'react'
import './RandomButton.css'
import Tweet from './Tweet.js'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'

const RandomButton = (props) => {
	const randomWords = [
			'soccer', 
			 'Real Madrid', 
			 'NY Jets', 
			 'Cricket',
			 'Nascar',
			 'Washington',
			 'Los Angeles',
			 'Guatemala',
			 'Volcano',
			 'Vans',
			 'Surf',
			 'Rum',
			 'Playstation',
			 'Bose',
			 'Texas A&M University',
			 'Coding',
			 'Google',
			 'Stock Market',
			 'Tesla',
			 'Elon Musk',
			 'Apple',
			 'Microsoft',
			 'Netflix',
			 'facebook',
			 'oranges',
			 'farm'
						]
	let tweetArray =[];
	let media;

	const randomWordGenerator = () => {
		let randomNumber = Math.floor(Math.random() * ((randomWords.length-1)- 0 + 1) + 0);
		props.handleRandomChange(randomWords[randomNumber]);
	}

	//identify if response from server is comming from users or keywords
	//this means its a response from keyword search
	if(props.random_result !== ''){
		props.random_result.forEach((result) => {
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
	} else {
	  tweetArray = ''
	}
	return (
		<div className="random-container">
			<div> 
				<FontAwesomeIcon 
					icon={faTwitter} 
					style= {{color: "#007bff", height: "10em", width: "10em"}} 
					className="fa-lg logo"
					onClick={() => randomWordGenerator()}/>
			</div>
			<div className="tweet-container">
				{tweetArray}
			</div>
		</div>
	);
}

export default RandomButton
