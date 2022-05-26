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


// Client should send GET requests in the form of:

// You can use template literals to add variables directly into path
// To get a single product:
// const product_id = 37311
// axios.get(`/products/:${product_id}`)

// For a list of products:
// Which page from product list to return
// const page = 1;
// How many products on that page to return.
// const count = 10;
// axios.get(`/products/?page=${page}&count=$`)


app.get('/*', function(req, res) {

  const queryParams = req.query;
  const endpoint = req.url;
  const fullURL = API_URL + endpoint;
  console.log('GOT', queryParams, endpoint);
  axios.get(fullURL, {
    headers: {
      authorization: TOKEN,
    }
  })
  .then((response) => {
    console.log(`FOR ${endpoint} API SENT: ${response.data}`);
    res.send(response.data)
  })
  .catch((error) => {
    console.log(error.message, endpoint);
    res.sendStatus(404)
  });
});


app.post('/*', function(req, res) {

  const data = req.body;
  const endpoint = req.url;
  const fullURL = API_URL + endpoint;

  axios.post(fullURL, data, {
    headers: {
      authorization: TOKEN,
    }
  })
  .then((response) => {
    console.log('API SENT:', response.data, response.status);
    res.send(response.data)
    return response.status;
  })
  .catch((error) => {
    console.log(error.message);
    res.send(error.response.status)
  });

});


// I'll update this soon
// app.put('/*', function(req, res) {

//   const data = req.body;
//   // const data = {};
//   const getUrl = req.url;

//   console.log(req.url, data);
//   // console.log(API_URL + getUrl);
//   const apiReqURL = API_URL + getUrl;
//   console.log(apiReqURL);

//   axios.put(apiReqURL, data, {
//     headers: {
//       authorization: TOKEN,
//     }
//   })
//   .then((response) => {
//     console.log('API SENT:', response.data);
//     res.send(response.data)
//   })
//   .catch(error => console.log(error.message));

// });













app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);