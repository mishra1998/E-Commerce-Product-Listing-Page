import { addToCart } from '@/store/actions';
import { truncateTitle } from '@/utils/utils';
import Link from 'next/link';
import { useDispatch } from "react-redux";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
       <Link href={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <h3 title={product.title}>
        {truncateTitle(product.title)}
      </h3>
      <p>₹{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}
