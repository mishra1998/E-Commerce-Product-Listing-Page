import { useState } from 'react';
import { fetchProducts } from '@/utils/api';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

export async function getServerSideProps() {
  try {
    const products = await fetchProducts();
    
    return { props: { products } };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { props: { products: [] } };
  }
}

export default function Home({ products }) {
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');


  // when we are not using redux 
  // const [countItem, setCountItem]=useState(0);
  // const [totalItemPrice, setTotalItemPricee]= useState(0);

  // Now data from store 
  const totalCount = useSelector((state) => state.countItem);
  const totalCost = useSelector((state) => state.totalItemPrice);

  const filteredProducts = products
    .filter((p) => (category ? p.category === category : true))
    .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : sortOrder === 'desc' ? b.price - a.price : 0));

  // const totalCartValues = (count, totalPrice) => {
  //   setCountItem((prev) => prev + count);
  //   setTotalItemPricee((prev) => prev + totalPrice);
  // };

  return (
    <div className="container">
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
      <div className="main-content">
        <div className="grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="cart-section">
          <h2>
            <i className="fa fa-shopping-cart"></i> Your Cart
          </h2>
          <p><strong>Total PRICE:</strong> ₹{totalCost}</p>
          <p><strong>Items:</strong> {totalCount}</p>
        </div>
      </div>
    </div>
  );
}
