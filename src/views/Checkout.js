import React, { useContext, useState } from "react";
import "../styles/Checkout.css";
import {CartContext} from "./ShoppingCart";
import {SuccessMessage} from "./SucessMessage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Checkout = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    const handlePayment = () => {
        setIsPaymentSuccessful(true);
        clearCart();
    };

    if (isPaymentSuccessful) {
        return <SuccessMessage />;
    }

    return (
        <div className="container mt-5">
            <h1>Finalizar Compra</h1>
            <div className="cart-summary">
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-details">
                                <img src={item.image} alt={item.title} className="item-thumbnail"/>
                                <div className="item-info">
                                    <h4>{item.title}</h4>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio: €{item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="remove-item">
                                <button className="btn btn-secondary" onClick={() => removeFromCart(item.id)}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </button>
                            </div>
                            <hr/>
                        </div>
                    ))
                ) : (
                    <p>Tu carrito está vacío.</p>
                )}
                {cart.length > 0 && (
                    <div className="cart-total">
                        <h4>Total: €{total.toFixed(2)}</h4>
                        <button className="btn btn-dark" onClick={handlePayment}>
                            Proceder al pago
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
