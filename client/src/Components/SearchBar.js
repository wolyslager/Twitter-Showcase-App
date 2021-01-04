import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Tweet from './Tweet.js'
import User from './User.js'
import './SearchBar.css'

const SearchBar = (props) => {
	let tweetArray =[];
	let media;
	let urlDisplay;
	let url;
	if(props.result !== ''){
		props.result.forEach((result) => {
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
	} else if (props.user_result !== ''){
		console.log(props.user_result)
		if(props.user_result[0].hasOwnProperty('errors')){
			tweetArray = 'User not found'
		} else {
			if(props.user_result[0].entities.hasOwnProperty('url')){
			 	urlDisplay = props.user_result[0].entities.url.urls[0].display_url;
			 	url = props.user_result[0].entities.url.urls[0].expanded_url;
			} else {
				 urlDisplay = '';
				 url = '';
			}
		   tweetArray.push(<User 
		   				profile_image={props.user_result[0].profile_image_url_https}
		   				background_image={props.user_result[0].profile_banner_url}
		   				name={props.user_result[0].name}
		   				user_name={props.user_result[0].screen_name}
		   				description={props.user_result[0].description}
		   				location={props.user_result[0].location}
		   				url_display={urlDisplay}
		   				href={url}
		   				joined={props.user_result[0].created_at}
		   				following={props.user_result[0].friends_count}
		   				followers={props.user_result[0].followers_count}
		   				caller={'searchbar'}/>
		   				)
		}
		props.user_result[1].statuses.forEach((result) => {
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

	if(props.search_type == 'keyword'){
		if(props.loading === true){
			return(
				<div className="container">
					<div className="instructions">
						<h5>Select the "User" button if you want to make a search for specific usernames (enter the 
							username without the @ in the search bar) or select the "Keyword" button if you want to 
						make a search for specific words of phrases. </h5>
					</div>
					<div className="searchbar-container">
						<Button className={`search-type ${props.user_button_class}`} onClick={() => props.handleSearchType('users')}>USERS</Button>
						<InputGroup className="mb-3" style={{width:"35em"}}>
						    <FormControl
						      placeholder="Search for your favorite topics..."
						      aria-label="Recipient's username"
						      aria-describedby="basic-addon2"
						      onChange={props.handleChange}
						    />
					    <InputGroup.Append>
					      <Button className="btn btn-primary" text="light" onClick={() => props.handleSubmit('search')}>Search</Button>
					    </InputGroup.Append>
					  </InputGroup>
					  <Button className={`search-type ${props.keyword_button_class}`} onClick={() => props.handleSearchType('keyword')}>KEYWORDS</Button>
				  </div>
				  <div className="loading">
					  <div class="spinner-border text-primary" role="status" style={{width: "9em", height:"9em"}}>
					  	<span class="sr-only">Loading...</span>
					</div>
				</div>
			  </div>
			);
		} else {
			return(
				<div className="container">
					<div className="instructions">
						<h5>Select the "User" button if you want to make a search for specific usernames (enter the 
							username without the @ in the search bar) or select the "Keyword" button if you want to 
						make a search for specific words of phrases. </h5>
					</div>
					<div className="searchbar-container">
						<Button className={`search-type ${props.user_button_class}`} onClick={() => props.handleSearchType('users')}>USERS</Button>
						<InputGroup className="mb-3" style={{width:"35em"}}>
						    <FormControl
						      placeholder="Search for your favorite topics..."
						      aria-label="Recipient's username"
						      aria-describedby="basic-addon2"
						      onChange={props.handleChange}
						    />
					    <InputGroup.Append>
					      <Button className="btn btn-primary" text="light" onClick={() => props.handleSubmit('search')}>Search</Button>
					    </InputGroup.Append>
					  </InputGroup>
					  <Button className={`search-type ${props.keyword_button_class}`} onClick={() => props.handleSearchType('keyword')}>KEYWORDS</Button>
				  </div>
				  <div className="tweet-array">
					{tweetArray}
				  </div>
			  </div>
			);
		}
		
  } else {
  	if(props.loading === true){
		 return(
			<div className="container">
				<div className="instructions">
					<h5>Select the "User" button if you want to make a search for specific usernames (enter the 
						username without the @ in the search bar) or select the "Keyword" button if you want to 
					make a search for specific words of phrases. </h5>
				</div>
				<div className="searchbar-container">
					<Button className={`search-type ${props.user_button_class}`} onClick={() => props.handleSearchType('users')}>USERS</Button>
					<InputGroup className="mb-3" style={{width:"35em"}}>
					    <FormControl
					      placeholder="Search for your favorite topics..."
					      aria-label="Recipient's username"
					      aria-describedby="basic-addon2"
					      onChange={props.handleChange}
					    />
				    <InputGroup.Append>
				      <Button className="btn btn-primary" text="light" onClick={() => props.handleSubmit('search-user')}>Search</Button>
				    </InputGroup.Append>
				  </InputGroup>
				  <Button className={`search-type ${props.keyword_button_class}`} onClick={() => props.handleSearchType('keyword')}>KEYWORDS</Button>
			  </div>
			  <div className="loading">
				<div class="spinner-border text-primary" role="status" style={{width: "9em", height:"9em"}}>
				  <span class="sr-only">Loading...</span>
				</div>
			  </div>
		  </div>
	   );
  	} else {
  		return(
			<div className="container">
				<div className="instructions">
					<h5>Select the "User" button if you want to make a search for specific usernames (enter the 
						username without the @ in the search bar) or select the "Keyword" button if you want to 
					make a search for specific words of phrases. </h5>
				</div>
				<div className="searchbar-container">
					<Button className={`search-type ${props.user_button_class}`} onClick={() => props.handleSearchType('users')}>USERS</Button>
					<InputGroup className="mb-3" style={{width:"35em"}}>
					    <FormControl
					      placeholder="Search for your favorite topics..."
					      aria-label="Recipient's username"
					      aria-describedby="basic-addon2"
					      onChange={props.handleChange}
					    />
				    <InputGroup.Append>
				      <Button className="btn btn-primary" text="light" onClick={() => props.handleSubmit('search-user')}>Search</Button>
				    </InputGroup.Append>
				  </InputGroup>
				  <Button className={`search-type ${props.keyword_button_class}`} onClick={() => props.handleSearchType('keyword')}>KEYWORDS</Button>
			  </div>
			  <div>
				{tweetArray}
			  </div>
		  </div>
		);
  	}
  }
}

export default SearchBar;