


  //const questionURL = '';
  // Use to update data via server/api.
  const axiosHandler = (req, url) => {
    // Add POST or PUT requests.
    // Add GET request after response.
    // Update state.
    // setQuestions();
    // axiosRequest([type of request], [url endpoint]);


    //   List Questions
    // GET /qa/questions/?product_id=&page=&count=&
    // Answers List
    // GET /qa/questions/:question_id/answers

    // Add a Question
    // POST /qa/questions
    // Add an Answer
    // POST /qa/questions/:question_id/answers

    // Mark Question as Helpful
    // PUT /qa/questions/:question_id/helpful
    // Mark Answer as Helpful
    // PUT /qa/answers/:answer_id/helpful

    // Report Question
    // PUT /qa/questions/:question_id/report
    // Report Answer
    // PUT /qa/answers/:answer_id/report
  };







API CALLS

Products

Product List
GET /products/?page=&count=

Prodcut Information
GET /products/:product_id

Product Styles
GET /products/:product_id/styles

Related Products
GET /products/:product_id/related



Questions and Answers

List Questions
GET /qa/questions/?product_id=&page=&count=&

Answers List
GET /qa/questions/:question_id/answers

Add a Question
POST /qa/questions

Add an Answer
POST /qa/questions/:question_id/answers

Mark Question as Helpful
PUT /qa/questions/:question_id/helpful

Mark Answer as Helpful
PUT /qa/answers/:answer_id/helpful

Report Question
PUT /qa/questions/:question_id/report


Report Answer
PUT /qa/answers/:answer_id/report



Reviews

List Reviews
GET /reviews/?page=&count=&sort=&product_id=

Get Review Metadata
GET /reviews/meta/?product_id=

Add a Review
POST /reviews
body = { proudct_id: 37311, rating: 5, ...}

Mark Review as Helpful
PUT /reviews/:review_id/helpful

Report Review
PUT /reviews/:review_id/report


let one = "https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
let two = "https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt"
let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

axios
  .all([requestOne, requestTwo, requestThree])
  .then(axios.spread((...responses) => {
  const responseOne = responses[0]
  const responseTwo = responses[1]
  const responesThree = responses[2]
  // use/access the results
  }))
  .catch(errors => {
    // react on errors.
  })





    // axios.get(`/qa/questions/?product_id=${id}`).then(res => console.log(res.data));


  // // Overview
  // const [productList, setProductList] = useState();
  // const [productInfomation, setProductInfomation] = useState();
  // const [productStyles, setPoductStyles] = useState();
  // // Questions
  // const [questions, setQuestions] = useState();
  // // const [answers, setAnswers] = useState();
  // // Reviews
  // const [rewviews, setRewviews] = useState();
  // const [rewviewsMeta, setRewviewsMeta] = useState();

          // Need requests for
        // products
        // can add values for page and count later
        axios.get(`/products/?page=${page}&count=${count}`),
        // product info
        // axios.get(`/products/${id}`),
        // product style
        // axios.get(`/products/${id}/styles`),
        // questions
        axios.get(`/qa/questions/?product_id=${id}`),
        // reviews
        // axios.get(`/reviews/?page=&count=&sort=&product_id=`),
        // reviews metadata
        // can add values for page and count later
        // axios.get(`/reviews/?page=&count=&product_id=${id}`)





            // const endpoint = `/qa/questions/?product_id=${id}`
    // axios
    //   .get(endpoint)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((errors) => {
    //     console.log(errors);
    //   }





     // // const report = (event) => {
  // //   event.preventDefault();
  // //   const target = event.target;
  // //   const name = target.name;

  // //   if (name === 'report-question') {
  // //     requestHandler('PUT', '/qa/questions/:question_id/report');
  // //   } else if (name === 'report-answer') {
  // //     requestHandler('PUT', '/qa/answers/:answer_id/report');
  // //   }
  // // };







  // // const addAnswer = () => {
  // //   event.preventDefault();
  // //   alert('Add answer here!');
  // // };













