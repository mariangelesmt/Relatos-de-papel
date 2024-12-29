import React, {useState} from "react";
import {useRedirect} from "../hooks/useRedirect";

export const Landing = () => {
    const [isLoading, setIsLoading] = useState(true);

    useRedirect(3000);
    setTimeout(() => setIsLoading(false), 3000);
    return (
        <div className="landing-container d-flex flex-column justify-content-center align-items-center vh-100 bg-warning">
            <div className="logo-container">
                <img
                    src="/images/icon-relatos.svg"
                    alt="Relatos de Papel Logo"
                    className="landing-logo mb-3"
                />
            </div>
            {isLoading ? (
                <div className="spinner-container text-center">
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : null}

            <div className="landing-text text-center">
                <h1 className="landing-title">¡Bienvenido a Relatos de Papel!</h1>
                <p className="landing-subtitle">Descubre un mundo lleno de historias y aventuras.</p>
            </div>
        </div>
    );
}