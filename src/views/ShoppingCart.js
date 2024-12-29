import React, {createContext, useState} from "react";

export const CartContext = createContext();

export const ShoppingCart = ({ children }) => {

        const [cart, setCart] = useState([]);

        const addToCart = (book, quantity) => {
            const existingItem = cart.find((item) => item.id === book.id);
            if (existingItem) {
                setCart(
                    cart.map((item) =>
                        item.id === book.id ? { ...item, quantity: item.quantity + quantity } : item
                    )
                );
            } else {
                // Agregar nuevo libro al carrito
                setCart([...cart, { ...book, quantity }]);
            }
        };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

        return (
            <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
                {children}
            </CartContext.Provider>
        );
    };
