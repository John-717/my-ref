import React,{useEffect,useState} from 'react';
import './App.css';
import ProductList from './ProductListing';


// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     price: 19.99,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     price: 24.99,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 3,
//     name: 'Product 3',
//     price: 29.99,
//     image: 'https://via.placeholder.com/150',
//   },
//   // Add more products as needed
// ];

const App = () => {

  const [products, setProducts] = useState({});

  useEffect(() => {
    // Fetch products from your API
    fetch("https://world.openfoodfacts.org/api/v0/product/737628064502.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
console.log("products", products)
  return (
    <div className="App">
      <h1>My E-Commerce Website</h1>
    <ProductList products={products} />
    </div>
  );
}

export default App;
