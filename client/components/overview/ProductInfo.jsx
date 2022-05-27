import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
// require('dotenv').config();
const axios = require('axios')


function ProductInfo(props) {

  return <div>
    <div>---Product Info---</div>
    <div>star rating: {props.ratings.stars}</div>
    <a href="#reviews">read all {props.ratings.count} ratings</a>
    <div>share on socials (fb, twitter, pinterest)</div>
    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Share to Twitter</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share on Facebook</a></div>
    <div>prod category: {props.product.category}</div>
    <div>product title: {props.product.name}, ID = {props.product.id}</div>
    <s>{props.currStyle.sale_price ? props.currStyle.original_price : ''}</s>
    <div>price: {props.currStyle.sale_price || props.currStyle.original_price}</div>
    <div>product overview: {props.product.slogan}</div>
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