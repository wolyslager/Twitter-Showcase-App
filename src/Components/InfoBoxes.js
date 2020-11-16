import React from 'react';
import './InfoBoxes.css'
import Card from 'react-bootstrap/Card';

const InfoBoxes = () => {
	return(
		<div className='card-container'>
		   <Card className='outer card' style={{ width: '21rem', height: '21rem' }}>
			<Card className='card' style={{ width: '18rem', height: '18rem' }} bg="primary" text="light">
			  <Card.Body>
			    <Card.Title>Card Title</Card.Title>
			    <Card.Text>
			      Some quick example text to build on the card title and make up the bulk of
			      the card's content.
			    </Card.Text>
			    <Card.Link href="#">Card Link</Card.Link>
			    <Card.Link href="#">Another Link</Card.Link>
			  </Card.Body>
			</Card>	
		   </Card>
		  <Card className='outer card' style={{ width: '21rem', height: '21rem' }}>
			<Card className='card' style={{ width: '18rem', height: '18rem' }} bg="primary" text="light">
			  <Card.Body>
			    <Card.Title>Card Title</Card.Title>
			    <Card.Text>
			      Some quick example text to build on the card title and make up the bulk of
			      the card's content.
			    </Card.Text>
			    <Card.Link href="#">Card Link</Card.Link>
			    <Card.Link href="#">Another Link</Card.Link>
			  </Card.Body>
			</Card>	
		   </Card>
		  <Card className='outer card' style={{ width: '21rem', height: '21rem' }}>
			<Card className='card' style={{ width: '18rem', height: '18rem' }} bg="primary" text="light">
			  <Card.Body>
			    <Card.Title>Card Title</Card.Title>
			    <Card.Text>
			      Some quick example text to build on the card title and make up the bulk of
			      the card's content.
			    </Card.Text>
			    <Card.Link href="#">Card Link</Card.Link>
			    <Card.Link href="#">Another Link</Card.Link>
			  </Card.Body>
			</Card>	
		   </Card>
		</div>
	);
}

export default InfoBoxes;