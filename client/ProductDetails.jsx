import React from 'react'
import ReactDOM from 'react-dom'
import Overview from './components/Overview.jsx'

class ProductDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>Product-Details
      <Overview></Overview>
    </div>
  }
}

export default ProductDetails