import React, { useState, useEffect } from 'react'
// import './css/Cart.css'

function AddToCart({skus}) {

  console.log(skus);

  const [size, setSize] = useState('');
  const [quantityLimit, setQuantityLimit] = useState(0);
  const [] = useState([]);

  useEffect(() => {
    if (skus) {
      const firstSku = skus[Object.keys(skus)[0]];
      console.log(firstSku)
      setQuantityLimit(firstSku.quantity);
    }
  }, [skus]);

  const changeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log(skus[value]);
    if (skus[value].quantity < 15) {
      setQuantityLimit(skus[value].quantity);
    } else {
      setQuantityLimit(15);
    }
  }

  return (
    <div className="overview-add-to-cart">
      <div className="cart-size-row">

        <select
          name="select-size"
          onChange={changeHandler}>
            {
              skus ? Object.keys(skus).map((key) => {
                return (
                  <option key={key} value={key}>{skus[key].size}</option>
                )
              }) : 0
            }
        </select>

        <select
          name="select-quantity"
          onChange={changeHandler}>
            {
              quantityLimit ? [...Array(quantityLimit).keys()].map((key) => {
                return (
                  <option key={key} value={key+1}>{key+1}</option>
                )
              }) : 0
            }
        </select>


      </div>

      {/* <div className="cart-add-row">
        <button>ADD TO BAG</button>
      </div> */}
    </div>
  )
}

export default AddToCart;