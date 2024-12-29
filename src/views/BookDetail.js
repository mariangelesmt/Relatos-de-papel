import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { booksData } from "../data/booksData";
import { CartContext } from "./ShoppingCart";
import "../styles/BookDetail.css"; // Importamos el archivo CSS para los estilos

export const BookDetail = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    const book = booksData.find((b) => b.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(book, quantity);
    };

    if (!book) {
        return <div className="container mt-5">Libro no encontrado.</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <img src={book.image} alt={book.title} className="img-fluid rounded shadow-lg" />
                </div>
                <div className="col-md-7">
                    <h2 className="text-end">{book.title}</h2>
                    <p className="text-end"><strong>Categoría:</strong> {book.category}</p>
                    <p className="text-end"><strong>Puntuación:</strong> {book.rating} ⭐</p>
                    <p className="text-end"><span className="book-price">{book.price}€</span> </p>
                    <div className="d-flex justify-content-end mb-3">
                        <div className="d-flex align-items-center ml-3">
                            <label htmlFor="quantity" className="me-2">Cantidad:</label>
                            <input
                                type="number"
                                id="quantity"
                                className="form-control quantity-input"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                            />
                        </div>
                        <button className="btn btn-warning ms-3" onClick={handleAddToCart}>
                            Añadir al carrito
                        </button>
                    </div>

                    <div className="mt-4">
                        <h5>Descripción:</h5>
                        <p>{book.description || "No hay descripción disponible."}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
