import React, { useState } from 'react'
// import './css/Cart.css'

function AddToCart({skus}) {
  console.log(skus);
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState();

  const changeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log(value);
  }

  return (
    <div className="overview-add-to-cart">
      <div className="cart-size-row">
        <select
          name="select-size"
          onChange={changeHandler}>
            {
              skus ? Object.keys(skus).map((key) => {
                console.log(skus[key]);
                return (
                  <option value={skus[key].size}>{skus[key].size}</option>
                )
              }) : 0
            }
        </select>
        {/* <select
          name="select-quantity"
          onChange={changeHandler}>
            {
              skus ? Object.keys(skus).map((key) => {
                console.log(skus[key]);
                return (
                  <option value={skus[key].size}>{skus[key].quantity}</option>
                )
              }) : 0
            }
        </select> */}


      </div>

      {/* <div className="cart-add-row">
        <button>ADD TO BAG</button>
      </div> */}
    </div>
  )
}

export default AddToCart;