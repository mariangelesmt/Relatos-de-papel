import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container text-center">
                <p className="mb-2">© Relatos de Papel. Todos los derechos reservados</p>
                <p className="mb-3">Contacto: <a href="mailto:info@relatosdepapel.com"
                                                 className="text-white">info@relatosdepapel.com</a></p>
                <div className="mb-3">
                    <span className="text-white me-3" role="button">Política de Privacidad</span>
                    <span className="text-white" role="button">Términos y Condiciones</span>
                </div>
                <div>
                    <a href="https://www.facebook.com" className="text-white me-3" target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="lg"/>
                    </a>
                    <a href="https://twitter.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="lg"/>
                    </a>
                    <a href="https://www.instagram.com" className="text-white" target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="lg"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}