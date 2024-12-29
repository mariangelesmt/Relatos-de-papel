import React from "react";
import "../styles/Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router";

export const Cart = ({ cart, isVisible, toggleCartVisibility, removeFromCart }) => {
    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const navigate = useNavigate();

    if (!isVisible) return null;

    const handleFinalizarCompra = () => {
        toggleCartVisibility();
        navigate("/checkout");
    };

    return (
        <div className="cart-card">
            <div className="d-flex justify-content-between pb-2">
                <h3>Carrito:</h3>
                <button className="btn" onClick={toggleCartVisibility}><FontAwesomeIcon icon={faTimes} /></button>
            </div>

            {cart.length > 0 ? (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item d-flex justify-content-between align-items-center">
                            <div>
                                x {item.quantity} - <strong>{item.title}</strong> - {item.price.toFixed(2)}€
                            </div>
                            <button
                                className="btn btn-secondary btn-sm"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Tu carrito está vacío.</p>
            )}
            {cart.length > 0 && (
                <div className="d-flex justify-content-between py-2">
                    <h4>Total: €{total.toFixed(2)}</h4>
                    <button
                        className="btn btn-warning"
                        onClick={handleFinalizarCompra}
                    >
                        Finalizar compra
                    </button>
                </div>
            )}
        </div>
    );
};
