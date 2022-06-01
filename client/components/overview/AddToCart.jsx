import React, { useState, useEffect } from 'react'
// import './css/Cart.css'

function AddToCart({skus}) {

  console.log(skus);

  const [size, setSize] = useState('');
  const [quantityLimit, setQuantityLimit] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    if (skus) {
      const firstSku = skus[Object.keys(skus)[0]];
      console.log(firstSku)
      // setQuantityLimit(firstSku.quantity);
    }
  }, [skus]);

  const changeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    let currentItem = {};

    if(value === 'default') {
      setQuantityLimit(0);
      setCartItem([]);
    } else if (skus[value].quantity < 15) {
      setQuantityLimit(skus[value].quantity);
    } else {
      setQuantityLimit(15);
    }
  }

  return (
    <div className="overview-add-to-cart">
      <div className="cart-size-row">

        {
          skus ?  <select
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
            : <></>
        }
      </div>

      {/* <div className="cart-add-row">
        <button>ADD TO BAG</button>
      </div> */}
    </div>
  )
}

export default AddToCart;