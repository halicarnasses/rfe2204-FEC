import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Overview from './Overview.jsx'

function ProductDetails() {
  const initialProd = {
    "id": 37313,
    "campus": "hr-rfe",
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": "40.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "100% Cotton"
        },
        {
            "feature": "Cut",
            "value": "Skinny"
        }
    ]
}
  const [product, setProduct] = useState(initialProd)

  return <div>Product Details
    <Overview Product={product}>Hello</Overview>
  </div>
}

export default ProductDetails