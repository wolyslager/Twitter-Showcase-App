const express = require("express");
const path = require("path");
const cors = require("cors");
const fetch = require('node-fetch');
const app = express();
require('dotenv').config();
const axios = require('axios');

app.use(cors());
app.use(express.static(path.join(__dirname, '/client/build')));

let bearer;
let getToken = () => {
    const config = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
            username: process.env.API_KEY,
            password: process.env.API_SECRET_KEY,
        },
    };
    return axios
        .post(
            "https://api.twitter.com/oauth2/token",
            "grant_type=client_credentials",
            config
        )
        .then((response) => {
            console.log(response.data.access_token);
            bearer = response.data.access_token;
        })
        .catch((error) => console.log(`Something went wrong: ${error}`));
};

getToken();

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, '/client/build')) });

app.get('/search', (req, res) => {
    if (bearer === undefined) {
        res.send({ 'response': 'Please follow the instructions in the github repo for this project to be able to use it https://github.com/wolyslager/Twitter-Showcase-App' })
    } else {
        url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + req.headers.search_value + '&result_type=popular&tweet_mode=extended '
        fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${bearer}`
                }
            }).then(response => response.json())
            .then((data) => {
                res.send(data.statuses)
            })
    }
})

app.get('/bearer-active', (req, res) => {
    if (bearer === undefined) {
        res.send({ 'response': 'false' })
    } else {
        res.send({ 'response': 'true' })
    }
})

app.get('/search-user', (req, res) => {
    if (bearer === undefined) {
        res.send({ 'response': 'Please follow the instructions in the github repo for this project to be able to use it https://github.com/wolyslager/Twitter-Showcase-App' })
    } else {
        let dataArray = []
        url = 'https://api.twitter.com/1.1/users/show.json?screen_name=' + req.headers.search_value
        fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${bearer}`
                }
            }).then(response => response.json())
            .then((data) => {
                dataArray.push(data)
                url = 'https://api.twitter.com/1.1/search/tweets.json?q=from:' + req.headers.search_value + '&result_type=popular&tweet_mode=extended'
                fetch(url, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${bearer}`
                        }
                    }).then(response => response.json())
                    .then((data) => {
                        dataArray.push(data)
                        res.send(dataArray)
                    })
            })
    }
})

app.get('/random-users', (req, res) => {
    if (bearer === undefined) {
        res.send({ 'response': 'Please follow the instructions in the github repo for this project to be able to use it https://github.com/wolyslager/Twitter-Showcase-App' })
    } else {
        url = 'https://api.twitter.com/1.1/users/show.json?screen_name=' + req.headers.search_value
        fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${bearer}`
                }
            }).then(response => response.json())
            .then((data) => {
                res.send(data)
            })
    }
})

app.get('/random-users-tweets', (req, res) => {
    //change url to fetch random users tweets
    url = 'https://api.twitter.com/1.1/search/tweets.json?q=from:' + req.headers.search_value + '&result_type=popular&tweet_mode=extended'
    fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${bearer}`
            }
        }).then(response => response.json())
        .then((data) => {
            res.send(data)
        })
})

app.get('/random', (req, res) => {
    url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + req.headers.search_value + '&result_type=popular&tweet_mode=extended&count=1'
    fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${bearer}`
            }
        }).then(response => response.json())
        .then((data) => {
            res.send(data.statuses)
        })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('app is running on port 3000')
})