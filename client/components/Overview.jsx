import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ProductInfo from './overview/ProductInfo.jsx';
import Cart from './overview/Cart.jsx';
import ImageGallery from './overview/ImageGallery.jsx';
import StyleSelector from './overview/StyleSelector.jsx';

function Overview({id, productInfo, productStyle, reviewCount, stateHandler}) {
  console.log(productInfo);

  const [style, setStyle] = useState({})
  const [product, setProduct] = useState({})
  const [styles, setStyles] = useState([])
  const [ratings, setRatings] = useState(0)

  // useEffect(() => {

  //       if (props) {
  //         axios.get(`/reviews/meta?product_id=${props}`)
  //           .then((result) => {
  //             console.log('review metadata: ', result.data.ratings)
  //             let total = 0
  //             let count = 0
  //             Object.keys(result.data.ratings).forEach((k, i) => {
  //               total += k * result.data.ratings[k]
  //               count += parseInt(result.data.ratings[k])
  //             })
  //             let stars = Math.floor((total/count))
  //             console.log(total, count)
  //             let decimal = total/count - stars
  //             console.log('stars + decimal : ', total/count, stars, decimal)
  //             if (decimal > .75) {
  //               if (decimal - .75 > .125) {
  //                 decimal = 1
  //               } else {
  //                 decimal = .75
  //               }
  //             } else if (decimal > .5) {
  //               if (decimal - .5 > .125) {
  //                 decimal = .75
  //               } else {
  //                 decimal = .5
  //               }
  //             } else if (decimal > .25) {
  //               if (decimal - .25 > .125) {
  //                 decimal = .5
  //               } else {
  //                 decimal = .25
  //               }
  //             } else {
  //               if (decimal > .125) {
  //                 decimal = .25
  //               } else {
  //                 decimal = 0
  //               }
  //             }
  //             console.log('stars + decimal : ', stars, decimal)
  //             setRatings({
  //               stars: stars + decimal,
  //               count: count
  //             })
  //           })

  //         axios.get(`/products/${props}`)
  //           .then((result) => {
  //             console.log('product state set to: ', result.data)
  //             setProduct(result.data)
  //           })
  //           .catch((err) => {
  //             console.error('ProductDetails.jsx -products state- ran into an error: ', err)
  //           });

  //         axios.get(`/products/${props}/styles`)
  //           .then((result) => {
  //             console.log('product state set to: ', result.data.results)
  //             setStyles(result.data.results)
  //             setStyle(result.data.results[0])
  //           })
  //           // .then(() => {
  //           //   console.log('are we setting one style: ', styles)
  //           //   setStyle(styles.length > 0 ? styles[0] : [])
  //           // })
  //           .catch((err) => {
  //             console.error('ProductDetails.jsx -styles state-ran into an error: ', err)
  //           });
  //       }
  //     }, [props]);

  // const setCurrStyle = (index) => {
  //   setStyle(styles[index])
  // }

  return (
    <div>
      <h2>Overview</h2>
      {/* <div>{props}</div>
      <ProductInfo currStyle={style} ratings={ratings} product={product}/>
      <StyleSelector setCurrStyle={setCurrStyle} styles={styles}/>
      <ImageGallery currStyle={style.photos ? style.photos : []}/>
      <Cart sizes={style.skus ? style.skus : {}}/> */}
    </div>
  )

}

export default Overview;