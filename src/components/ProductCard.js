import Link from 'next/link';
import { useState } from 'react';

export default function ProductCard({ product,totalCartValues }) {

  const [count,setCount]=useState(0);
  const [totalPrice, setTotalPrice]=useState(0);

  const addTocart=(price)=>{
    const newCount = count + 1
    const newTotal = totalPrice+price
    setCount(newCount);
    setTotalPrice(newTotal)
    totalCartValues(1,price)
  }

  const removeToCart=(price)=>{
    if (count > 0) {
      const newCount = count - 1
      const newTotal = totalPrice-price
      setCount(newCount);
      setTotalPrice(newTotal)
      totalCartValues(-1,-price)
    }
  }

  return (
    <div className="product-card">
      <Link href={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <button onClick={()=>addTocart(product.price)}>Add to Cart</button>
      <button onClick={()=>removeToCart(product.price)}>Remove</button>
    </div>
  );
}
