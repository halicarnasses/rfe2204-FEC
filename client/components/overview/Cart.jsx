import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
// import './css/Cart.css'

function Cart(props) {
  const [ cartStage, setStage ] = useState({stageNum: 0})
  const [ cartInfo, setInfo ] = useState({info: {}})

  return <>
    <div>---Cart---</div>
    <div className="container">
      <div className="item size">Select A Size</div>
    </div>
    <select defaultValue="Select" onChange={(e) => {
          console.log('quantity: ', e.target.value)
          setStage({
            stageNum: 1,})
          setInfo({
            info: {
              quantity: props.sizes[e.target.value].quantity
            }
          })
        }}>
      {Object.keys(props.sizes).length > 0 ? <option value="Select" >Select A Size</option> : <option value="Select" disabled>OUT OF STOCK</option>}

      {Object.keys(props.sizes).map((k, i) => {
        return <option key={i} value={k} >{props.sizes[k].size}
        </option>
      })}
    </select>
    {cartStage.stageNum > 0 ? <>
    <div>Select Quantity</div>
    <select onChange={(e) => {
      setStage({
        stageNum: 2
      })
      console.log('cartStage: ', cartStage)
    }}>
      {Array.from(Array(cartInfo.info.quantity > 14? 14 : cartInfo.info.quantity).keys()).map((val, i) => {
        return <option key={i}>{val + 1}</option>
      })}
    </select>
    </>: <div></div>}
    {cartStage.stageNum > 1 ? <button>Add To Cart</button> : <div></div>}
  </>
}

export default Cart