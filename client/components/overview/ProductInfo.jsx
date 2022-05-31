import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
// require('dotenv').config();
const axios = require('axios')
import './css/ProductInfo.css'

function ProductInfo(props) {



  return <div className="product-info">
    <div>star rating: {props.ratings.stars}</div> <a href="#reviews">read all {props.ratings.count} ratings</a>
    <div className="ratings">
      <div className="empty-stars"></div>
      <div className="full-stars" style={{width:`${4.6/5*100}%`}}></div>
    </div>
    <div className="category">{props.product.category}</div>
    <div className="product-name">{props.product.name}</div>
    <div className='price'>

      <div >{props.currStyle.sale_price ? 'original price: ' : ''}</div> <s className='price__old'>{props.currStyle.sale_price ? props.currStyle.original_price : ''}</s>
    </div>
    <div >price: {props.currStyle.sale_price || props.currStyle.original_price}</div>
    <div>product overview: {props.product.slogan}</div>


    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Share to Twitter</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share on Facebook</a></div>
  </div>
}

export default ProductInfo
