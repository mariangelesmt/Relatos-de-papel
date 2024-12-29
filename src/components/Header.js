import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {CartContext} from "../views/ShoppingCart";
import "../styles/Cart.css";
import {Cart} from "./Cart";

export const Header = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const [isVisible, setIsVisible] = useState(false);

    const toggleCartVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <header className="bg-warning text-white p-3">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <Link to={"/home"} className="text-decoration-none text-white d-flex align-items-center">
                        <img
                            src="/images/icon-relatos.svg"
                            alt="Carrito"
                            width="266"
                            height="48"
                            className="me-2"
                        />
                    </Link>
                </div>
                <div>
                    <button
                        className="btn btn-outline-light d-flex align-items-center"
                        onClick={toggleCartVisibility}
                    >
                        <img
                            src="/images/cart-shopping.svg"
                            alt="Carrito"
                            width="24"
                            height="24"
                            className="me-2"
                        />
                        {cart.length > 0 && <span>({cart.length})</span>}
                    </button>
                </div>
            </div>

            <Cart
                cart={cart}
                isVisible={isVisible}
                toggleCartVisibility={toggleCartVisibility}
                removeFromCart={removeFromCart}
            />
        </header>
    );
};