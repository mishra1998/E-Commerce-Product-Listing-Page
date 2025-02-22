import { useState } from 'react';
import { fetchProducts } from '@/utils/api';
import ProductCard from '../components/ProductCard';

export async function getServerSideProps() {
  const products = await fetchProducts();
  return { props: { products } };
}

export default function Home({ products }) {
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const [countItem, setCountItem]=useState(0);
  const [totalItemPrice, setTotalItemPricee]= useState(0);

  const filteredProducts = products
    .filter((p) => (category ? p.category === category : true))
    .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : sortOrder === 'desc' ? b.price - a.price : 0));

    const totalCartValues = (count, totalPrice) => {
      setCountItem((prev) => prev + count);
      setTotalItemPricee((prev) => prev + totalPrice);
    };

  return (
    <div className="container">
      <h1>Product Listing</h1>
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {[...new Set(products.map((p) => p.category))].map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div style={{display:"flext"}}>
      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard totalCartValues={totalCartValues} key={product.id} product={product} />
        ))}
      </div>
      <div>
        Cart Section
        <p><strong>Total PRICE:</strong>{totalItemPrice}</p>
        <p><strong>Items:</strong>{countItem}</p>
      </div>
      </div>
    </div>
  );
}
