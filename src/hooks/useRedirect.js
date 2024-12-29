// src/hooks/useRedirect.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirect = (delay = 5000) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, delay);

        return () => clearTimeout(timer);
    }, [navigate, delay]);
};
