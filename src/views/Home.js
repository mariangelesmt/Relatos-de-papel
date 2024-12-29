import React, { useState } from "react";
import { useNavigate } from "react-router";
import { booksData } from "../data/booksData";
import "../styles/Home.css";

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredBooks = booksData.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
    );

    const handleDetails = (id) => {
        navigate(`/book/${id}`);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Los más vendidos en 2024</h1>
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar libros por título..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="row">
                {filteredBooks.map((book) => (
                    <div key={book.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-img-left">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="card-img-top"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">{book.category}</p>
                                <p className="card-text">{book.rating} ⭐</p>
                                <p className="card-text">
                                    <strong>{book.price}€</strong>
                                </p>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => handleDetails(book.id)}
                                >
                                    + Información
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
