// import { createRoot } from "react-dom/client";
// const root = createRoot(document.getElementById("root"));
import React from 'react'
import ReactDOM from 'react-dom'
import ProductDetails from './ProductDetails.jsx'

// Huzzah for jsx!
// const App = () => {
//   return <h1>Hello World</h1>
// }

// root.render(<App />);

function App() {
  return <ProductDetails></ProductDetails>
}
ReactDOM.render(<App/>, document.getElementById("root"))