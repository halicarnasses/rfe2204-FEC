import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function ProductInfo(props) {
  // star endpoint:
  // https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=37313
  // response:

//     "product_id": "37313",
//     "ratings": {
//         "1": "1",
//         "2": "2",
//         "3": "1",
//         "4": "16",
//         "5": "12"
//     },

  return <div>
    <div>star rating</div>
    <div>share on socials (fb, twitter, pinterest)</div>
    <div>prod category: {props.Product.category}</div>
    <div>product title: {props.Product.name}, ID = {props.Product.id}</div>
    <div>price: {props.Product.default_price}</div>
    <div>product overview: {props.Product.slogan}</div>
  </div>
}

export default ProductInfo

// star rating, product category, product title, price, product overview, share on socials (fb, twitter, pinterest) + {props.Product.name}

// {
//   "id": 37311,
//   "campus": "hr-rfe",
//   "name": "Camo Onesie",
//   "slogan": "Blend in to your crowd",
//   "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//   "category": "Jackets",
//   "default_price": "140.00",
//   "created_at": "2021-08-13T14:37:33.145Z",
//   "updated_at": "2021-08-13T14:37:33.145Z"
// },