import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get('https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=')
      .then((res) => {
        console.log(res.data.result);
        setProducts(res.data.result.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>Data is here</h1>
      <div className='item-container'>
        {
          products.map((product) => (
            <div className='card' key={product.id_product}>
              <img src={product.image} alt='' />
              <h3>{product.name}</h3>
              <h2>$ {product.price}</h2>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
