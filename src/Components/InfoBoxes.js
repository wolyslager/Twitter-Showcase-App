import React from 'react';
import './InfoBoxes.css'
import Card from 'react-bootstrap/Card';

const InfoBoxes = () => {
	return(
		<div className='card-container'>
		   <Card className='outer card' style={{ width: '21rem', height: '21rem' }}>
			<Card className='card' style={{ width: '18rem', height: '18rem' }} bg="primary" text="light">
			  <Card.Body>
			    <Card.Title>What is it?</Card.Title>
			    <hr className="horizontal"></hr>
			    <Card.Text>
			      This application lets you search for yout favorite Twitter users and see their most recent Tweets! It also
			      allows you to view a random selection of Tweets if you want. 
			    </Card.Text>
			  </Card.Body>
			</Card>	
		   </Card>
		  <Card className='outer card' style={{ width: '21rem', height: '21rem' }}>
			<Card className='card' style={{ width: '18rem', height: '18rem' }} bg="primary" text="light">
			  <Card.Body>
			    <Card.Title>How Do I Use It?</Card.Title>
			    <hr className="horizontal"></hr>
			    <Card.Text>
			      Click on the "Find Tweets" tab and type in a Twitter user into the search bar.
			       If you're feeling lucky, click on the "Roll The Dice" tab!
			    </Card.Text>
			  </Card.Body>
			</Card>	
		   </Card>
		  <Card className='outer card' style={{ width: '21rem', height: '21rem' }}>
			<Card className='card' style={{ width: '18rem', height: '18rem' }} bg="primary" text="light">
			  <Card.Body>
			    <Card.Title>How Does It Work?</Card.Title>
			    <hr className="horizontal"></hr>
			    <Card.Text>
			      The Twitter API App has a ReactJS front end that communicates with a NodeJS server. The server 
			      makes requests to the Twitter API and the response is then rendered here!
			    </Card.Text>
			  </Card.Body>
			</Card>	
		   </Card>
		</div>
	);
}

export default InfoBoxes;