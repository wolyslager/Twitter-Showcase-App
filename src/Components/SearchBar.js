import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Tweet from './Tweet.js'
import './SearchBar.css'

const SearchBar = (props) => {
	let tweetArray =[];
	let media;
	console.log(props)
	//identify if response from server is comming from users or keywords
	//this means its a response from keyword search
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
	} else {
	  tweetArray = ''
	}
	if(props.search_type == 'keyword'){
		return(
		<div className="container">
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
		  <div>
			{tweetArray}
		  </div>
	  </div>
	);
  } else {
  	return(
		<div className="container">
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

export default SearchBar;