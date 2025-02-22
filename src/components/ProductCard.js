import { addToCart,removeFromCart } from '@/store/actions';
import Link from 'next/link';
// import { useState } from 'react';
import { useDispatch } from "react-redux";

export default function ProductCard({ product }) {

  // const [count,setCount]=useState(0);
  // const [totalPrice, setTotalPrice]=useState(0);

  const dispatch =useDispatch();

  // const addTocart=(price)=>{

    // directly without redux

    // const newCount = count + 1
    // const newTotal = totalPrice+price
    // setCount(newCount);
    // setTotalPrice(newTotal)
    // totalCartValues(1,price)

    // directly use if don't want to make action file sepratly 
    // dispatch(type="REMOVE_TO_CART", payload={price})
  // }

  // const removeToCart=(price)=>{
    // if (count > 0) {
    //   const newCount = count - 1
    //   const newTotal = totalPrice-price
    //   setCount(newCount);
    //   setTotalPrice(newTotal)
    //   totalCartValues(-1,-price)
    // }
    // dispatch({ type: "ADD_TO_CART", payload: { price } }); 
  // }

  return (
    <div className="product-card">
      <Link href={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <button onClick={()=> dispatch(addToCart(product.price))}>Add to Cart</button>
      <button onClick={()=>dispatch(removeFromCart(product.price))}>Remove</button>
    </div>
  );
}
