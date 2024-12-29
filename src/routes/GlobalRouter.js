import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Landing} from '../views/Landing';
import {NotFound} from '../views/NotFound';
import {Home} from "../views/Home";
import {Header} from "../components/Header";
import {BookDetail} from "../views/BookDetail";
import {Footer} from "../components/Footer";
import {Checkout} from "../views/Checkout";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/home" element={<Layout><Home/></Layout>}/>
                <Route path="/book/:id" element={<Layout><BookDetail/></Layout>}/>
                <Route path="/checkout" element={<Layout><Checkout/></Layout>}/>
                <Route path="*" element={<Layout><NotFound/></Layout>}/>
            </Routes>
        </BrowserRouter>
);
}

const Layout = ({
    children
}) => (
    <>
        <div
            className="page-wrapper d-flex flex-column min-vh-100">
            <Header/>
            <div className="content flex-grow-1">{children}</div>
            <Footer/>
        </div>
    </>
);

export default GlobalRouter;
