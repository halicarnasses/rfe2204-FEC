import React, { useState } from 'react';
import axios from "axios";

function AddToCart({skus}) {

  // save the sku for the current size selected
  const [sku, setSku] = useState('');
  const [quantity, setQuantity] = useState();
  const [quantityLimit, setQuantityLimit] = useState(0);

  const changeHandler = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'select-size') {

      if(value === 'default') {
        setQuantityLimit(0);
      } else if (skus[value].quantity < 15) {
        setQuantityLimit(skus[value].quantity);
        setSku(value);
        setQuantity(1);
      } else {
        setQuantityLimit(15);
        setSku(value);
        setQuantity(1);
      }

    } else if (name === 'select-quantity') {
      setQuantity(value);
    }
  }

  const clickHandler = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;

    for (let i = 0; i < quantity; i++) {
      axios
        .post(`/cart`, { "sku_id": sku})
        .then((response) => ( console.log(response.status) ))
        .catch((error) => ( console.log(error) ));
    }
  };

  return (
    <div className="overview-add-to-cart">
      <div className="cart-size-row">
        {
          skus ?
            <select
              name="select-size"
              onChange={changeHandler}>
                <option key={0} value={'default'}>SELECT SIZE</option>
                {
                  Object.keys(skus).map((key) => {
                    return (
                      <option key={key+1} value={key}>{skus[key].size}</option>
                    )
                  })
                }
            </select>
          : <h5>OUT OF STOCK</h5>
        }
        {
          quantityLimit ?
            <select
              name="select-quantity"
              onChange={changeHandler}>
                {
                  [...Array(quantityLimit).keys()].map((key) => {
                    return (
                      <option key={key} value={key+1}>{key+1}</option>
                    )
                  })
                }
            </select>
          : null
        }
      </div>
      <div className="cart-add-row">
        <button className="add-to-cart-btn onclick" name="add-to-cart-btn" onClick={clickHandler}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default AddToCart;