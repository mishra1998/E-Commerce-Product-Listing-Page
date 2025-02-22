import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '@/store/actions';
import { truncateTitle } from '@/utils/utils';

export default function Cart() {
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();

    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>
                <i className="fa fa-shopping-cart"></i> Your Cart
            </h2>

            <div className="cart-summary">
                <span>Total Items: {totalItems}</span>
                <span>Total Price: ₹{totalAmount.toFixed(2)}</span>
            </div>

            {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
            ) : (
                <ul className="cart-list">
                    {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3 title={item.title}>
                                    {truncateTitle(item.title)}
                                </h3>
                                <p>₹{item.price} x {item.quantity}</p>
                            </div>
                            <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}