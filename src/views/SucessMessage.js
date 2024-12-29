import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useRedirect } from '../hooks/useRedirect';
import {Link} from "react-router-dom"; // Importa el custom hook

export const SuccessMessage = () => {
    useRedirect(10000);

    return (
        <div className="container my-5 text-center">
            <h1>¡Pago realizado con éxito!</h1>
            <p>Gracias por tu compra. Tu carrito está ahora vacío.</p>

            <FontAwesomeIcon icon={faCheckCircle} size="3x" color="green" />

            <div className="mt-4">
                <div className="mt-3">
                    <Link to="/home" className="btn btn-dark">
                        Seguir comprando
                    </Link>
                </div>
            </div>
        </div>
    );
};
