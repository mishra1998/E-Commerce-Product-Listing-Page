import { useState } from 'react';
import { fetchProducts } from '@/utils/api';
import ProductCard from '../components/ProductCard';
import Cart from '@/components/cart';

export async function getServerSideProps() {
  try {
    const products = await fetchProducts();
    return { props: { products } };
  } catch (error) {
    return { props: { products: [] } };
  }
}

export default function Home({ products }) {
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const filteredProducts = products
    .filter((p) => (category ? p.category === category : true))
    .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : sortOrder === 'desc' ? b.price - a.price : 0));

  return (
    <div className="container">
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {[...new Set(products.map((p) => p.category))].map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="main-content">
        <div className="grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </div>
    </div>
  );
}
