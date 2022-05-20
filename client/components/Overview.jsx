import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ProductInfo from './overview/ProductInfo.jsx'
import Cart from './overview/Cart.jsx'
import ImageGallery from './overview/ImageGallery.jsx'
import StyleSelector from './overview/StyleSelector.jsx'
function Overview(props) {

  return <div>
    <ProductInfo Product={props.Product}/>
    <ImageGallery Product={props.Product}/>
    <StyleSelector Product={props.Product}/>
    <Cart Product={props.Product}/>
  </div>
}

export default Overview