import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Overview from './Overview.jsx'

function ProductDetails() {
  const [product, setProduct] = useState()

  return <div>Product Details
    <Overview>Hello</Overview>
  </div>
}

export default ProductDetails