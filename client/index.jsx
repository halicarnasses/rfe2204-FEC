// import { createRoot } from "react-dom/client";
// const root = createRoot(document.getElementById("root"));
import React from 'react'
import ReactDOM from "react-dom/client"
import ProductDetails from './components/ProductDetails.jsx'

// Huzzah for jsx!
// const App = () => {
//   return <h1>Hello World</h1>
// }

// root.render(<App />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductDetails />
  </React.StrictMode>
);