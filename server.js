const express = require("express");
const path = require("path");
const cors = require("cors");
const fetch = require('node-fetch');
const app = express();
require('dotenv').config();
const axios = require('axios');

app.use(cors());
app.use(express.static(path.join(__dirname, '/..client/build'), { maxAge: 86400000 }));
// app.use(express.static(path.join(__dirname, "client/build")));

app.get('/', (req, res) => {res.send('it is working!')})

app.get('/search', (req, res) => {
	url = 'https://api.twitter.com/1.1/search/tweets.json?q='+req.headers.search_value+'&result_type=popular&tweet_mode=extended '
	fetch(url, {
		headers: {
			'Content-Type' : 'application/json',
			'Accept' : 'application/json',
			'Authorization': `Bearer AAAAAAAAAAAAAAAAAAAAALDmJwEAAAAAix80Mtkn6ulfEVbiljn5FGk17v4%3DeHJl3DMsy09qTW2IjCFDwz5Zu5Uja5vVSDEzWJAFluT32Dtiue`
		}
	}).then(response => response.json())
	  .then((data) =>{
	  		res.send(data.statuses)
	  })	
})

app.get('/search-user', (req, res) => {
	let dataArray = []
	url = 'https://api.twitter.com/1.1/users/show.json?screen_name=' + req.headers.search_value
	fetch(url, {
		headers: {
			'Content-Type' : 'application/json',
			'Accept' : 'application/json',
			'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAALDmJwEAAAAAix80Mtkn6ulfEVbiljn5FGk17v4%3DeHJl3DMsy09qTW2IjCFDwz5Zu5Uja5vVSDEzWJAFluT32Dtiue'
		}
	}).then(response => response.json())
	  .then((data) =>{
	  		dataArray.push(data)
	  		url = 'https://api.twitter.com/1.1/search/tweets.json?q=from:' + req.headers.search_value + '&result_type=popular&tweet_mode=extended'
			fetch(url, {
				headers: {
					'Content-Type' : 'application/json',
					'Accept' : 'application/json',
					'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAALDmJwEAAAAAix80Mtkn6ulfEVbiljn5FGk17v4%3DeHJl3DMsy09qTW2IjCFDwz5Zu5Uja5vVSDEzWJAFluT32Dtiue'
				}
			}).then(response => response.json())
			  .then((data) =>{
			  		dataArray.push(data)
			  		res.send(dataArray)
			  })
	  })
	
})

app.get('/random-users', (req, res) => {
	url = 'https://api.twitter.com/1.1/users/show.json?screen_name=' + req.headers.search_value
	fetch(url, {
		headers: {
			'Content-Type' : 'application/json',
			'Accept' : 'application/json',
			'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAALDmJwEAAAAAix80Mtkn6ulfEVbiljn5FGk17v4%3DeHJl3DMsy09qTW2IjCFDwz5Zu5Uja5vVSDEzWJAFluT32Dtiue'
		}
	}).then(response => response.json())
	  .then((data) =>{
	  		res.send(data)
	  })
})

app.get('/random-users-tweets', (req, res) => {
	//change url to fetch random users tweets
	url = 'https://api.twitter.com/1.1/search/tweets.json?q=from:' + req.headers.search_value + '&result_type=popular&tweet_mode=extended'
	fetch(url, {
		headers: {
			'Content-Type' : 'application/json',
			'Accept' : 'application/json',
			'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAALDmJwEAAAAAix80Mtkn6ulfEVbiljn5FGk17v4%3DeHJl3DMsy09qTW2IjCFDwz5Zu5Uja5vVSDEzWJAFluT32Dtiue'
		}
	}).then(response => response.json())
	  .then((data) =>{
	  		console.log('-----------------', data)
	  		res.send(data)
	  })
})

app.get('/random', (req, res) => {
	url = 'https://api.twitter.com/1.1/search/tweets.json?q='+req.headers.search_value+'&result_type=popular&tweet_mode=extended&count=1'
	fetch(url, {
		headers: {
			'Content-Type' : 'application/json',
			'Accept' : 'application/json',
			'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAALDmJwEAAAAAix80Mtkn6ulfEVbiljn5FGk17v4%3DeHJl3DMsy09qTW2IjCFDwz5Zu5Uja5vVSDEzWJAFluT32Dtiue'
		}
	}).then(response => response.json())
	  .then((data) =>{
	  		res.send(data.statuses)
	  })	
})

app.listen(process.env.PORT || 3000, ()=> {
	console.log('app is running on port 3000')
})