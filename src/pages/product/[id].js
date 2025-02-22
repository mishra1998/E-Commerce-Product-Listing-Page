import { fetchProducts } from '@/utils/api';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const products = await fetchProducts();
  const product = products.find((p) => p.id.toString() === id);
  return { props: { product } };
}

export default function ProductDetail({ product }) {
  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="description">{product.description}</p>
        <p className="price">₹{product.price}</p>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}
