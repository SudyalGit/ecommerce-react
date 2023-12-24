// import { useEffect } from 'react';
import './App.css';
import CardItem from './component/CardItem';
import Navbar from './component/Navbar';
import products from './api-calls/products';
import { useState } from 'react';
import { AddProduct } from './component/AddProduct';

function App() {
  // const url = 'https://jsonplaceholder.typicode.com/albums';
  // useEffect(()=>{
  //   async function logProducts() {
  //     const response = await fetch("https://my-json-server.typicode.com/jaiswalaryan/data/db");
  //     const products = await response.json();
  //     console.log(products.products);
  //   }

  //   logProducts();
  // },[])

  const [addProduct, setAddProduct] = useState(false);
  const [productsList, setProductList] = useState(products);
  const [dashboard, setDashboard] = useState(true);

  function handleAddProduct() {
    setAddProduct(true);
  }
  function handleCancle() {
    setAddProduct(false);
  }
  function handleProducts() {
    setAddProduct(false);
    setDashboard(true);
  }

  const productList = productsList.map(product => <CardItem key={product.id} img={product.images[0]} title={product.title} description={product.description} price={product.price} />);

  if (addProduct) {
    return (
      <>
        <Navbar products={handleProducts} addProductClick={handleAddProduct} />
        <AddProduct cancleClick={handleCancle} />
      </>
    )
  }

  if (dashboard){
    return(
      <>
      <Navbar products={handleProducts} addProductClick={handleAddProduct} />
      {productList}
      </>
    )
  }

  return (
    <>
      <Navbar products={handleProducts} addProductClick={handleAddProduct} />
      {productList}
    </>
  );
}

export default App;