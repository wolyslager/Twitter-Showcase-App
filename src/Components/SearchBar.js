import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Tweet from './Tweet.js'
import './SearchBar.css'

const SearchBar = (props) => {
	//create array of tweets
	let tweetArray =[];
	if(props.result !== ''){
		props.result.forEach((result) => {
			console.log(result)
			tweetArray.push(
				<Tweet 
					text={result.text} 
					name={result.user.name} 
					profile_image={result.user.profile_image_url}/>
			)
		})
	} else {
		tweetArray = ''
	}
	
	return(
		<div>
			<div>
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