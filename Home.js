import React from 'react';
import Product from '../components/Product';

function Home() {
  return (
    <div style={{display:'flex', flexWrap:'wrap'}}>
      <Product title="Laptop" price="50000" image="https://via.placeholder.com/150" />
      <Product title="Phone" price="20000" image="https://via.placeholder.com/150" />
      <Product title="Headphones" price="2000" image="https://via.placeholder.com/150" />
    </div>
  );
}
export default Home;
