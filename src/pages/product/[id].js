import { fetchProducts } from '@/utils/api';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const products = await fetchProducts();
  const product = products.find((p) => p.id.toString() === id);
  return { props: { product } };
}

export default function ProductDetail({ product }) {
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
    </div>
  );
}
