import './App.css';
import CardItem from './component/CardItem';
import Navbar from './component/Navbar';
import products from './data/products.json'

const productCard = products.map(product => <CardItem img={product.images[0]} title={product.title} description={product.description} price={product.price} />);

function App() {
  return (
    <>
      <Navbar/>
      {productCard}
    </>
  );
}
export default App;