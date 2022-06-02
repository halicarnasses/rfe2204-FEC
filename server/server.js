require('dotenv').config();
const PORT = process.env.PORT;
const CAMPUS_CODE = process.env.CAMPUS_CODE;
const TOKEN = process.env.GIT_API_TOKEN;

const path= require("path");
const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
API_URL = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}`;

app.get('/*', function(req, res) {

  const queryParams = req.query;
  const endpoint = req.url;
  const fullURL = API_URL + endpoint;

  axios.get(fullURL, {
    headers: {
      authorization: TOKEN,
    }
  })
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log('GET', endpoint, error.message);
  });
});

app.post('/*', function(req, res) {

  const data = req.body;
  const endpoint = req.url;
  const fullURL = API_URL + endpoint;

  axios.post(fullURL, data, {
    headers: {
      authorization: TOKEN,
      'content-type': 'application/json'
    }
  })
  .then((response) => {
    // console.log('API SENT:', response.data, response.status);
    res.send(response.status)
  })
  .catch((error) => {
    console.log('POST', endpoint, error.message);
  });

});

// I'll update this soon
app.put('/*', function(req, res) {

  const data = req.body;
  const endpoint = req.url;
  const fullURL = API_URL + endpoint;
  console.log('PUT', endpoint);
  axios.put(fullURL, data, {
    headers: {
      authorization: TOKEN,
    }
  })
  .then((response) => {
    // console.log('API SENT:', response.status);
    res.sendStatus(response.status)
  })
  .catch((error) => {
    console.log('PUT', endpoint, error.message);
  });

});

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);