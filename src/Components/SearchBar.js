import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Tweet from './Tweet.js'
import './SearchBar.css'

const SearchBar = (props) => {
	//identify if response from server is comming from users or keywords
	

	//create array of tweets
	let tweetArray =[];
	let media;
	if(props.result !== ''){
		props.result.forEach((result) => {
			console.log(result)
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
	
	return(
		<div className="container">
			<div >
				<InputGroup className="mb-3" style={{width:"35em"}}>
				    <FormControl
				      placeholder="Search for your favorite Twitter users..."
				      aria-label="Recipient's username"
				      aria-describedby="basic-addon2"
				      onChange={props.handleChange}
				    />
			    <InputGroup.Append>
			      <Button className="btn btn-primary" text="light" onClick={() => props.handleSubmit()}>Search</Button>
			    </InputGroup.Append>
			  </InputGroup>
		  </div>
		  <div>
			{tweetArray}
		  </div>
	  </div>
	);
}

export default SearchBar;