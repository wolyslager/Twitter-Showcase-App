import React from 'react';
import './InfoBoxes.css'
import Card from 'react-bootstrap/Card';

const InfoBoxes = () => {
	return(
		<div className='card-container'>
		   
			<Card className='card' style={{ width: '18rem', height: '18rem' }} bg="secondary" text="light">
			  <Card.Body>
			    <Card.Title>What is it?</Card.Title>
			    <hr className="horizontal"></hr>
			    <Card.Text>
			      This application lets you search for yout favorite Twitter topics and see the most recent Tweets about them! It also
			      allows you to view a random selection of Tweets if you want. 
			    </Card.Text>
			  </Card.Body>
			</Card>	

			<Card className='card' style={{ width: '18rem', height: '18rem' }} bg="secondary" text="light">
			  <Card.Body>
			    <Card.Title>How Do I Use It?</Card.Title>
			    <hr className="horizontal"></hr>
			    <Card.Text>
			      Click on the "Find Tweets" tab and type in a topic that you are interested in into the search bar.
			       If you're feeling lucky, go to the "Roll The Dice" tab and click on the bird!
			    </Card.Text>
			  </Card.Body>
		   </Card>

			<Card className='card' style={{ width: '18rem', height: '18rem' }} bg="secondary" text="light">
			  <Card.Body>
			    <Card.Title>How Does It Work?</Card.Title>
			    <hr className="horizontal"></hr>
			    <Card.Text>
			      The Twitter API App has a ReactJS front end that communicates with a NodeJS server. The server 
			      makes requests to the Twitter API and the response is then rendered here!
			    </Card.Text>
			  </Card.Body>
			</Card>	
		  
		</div>
	);
}

export default InfoBoxes;