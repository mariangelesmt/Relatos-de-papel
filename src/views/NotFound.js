import React from "react";

export const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="text-center">
                <h1 className="display-1 text-danger">404</h1>
                <p className="lead text-muted">Página no encontrada</p>
            </div>
        </div>
    );
}