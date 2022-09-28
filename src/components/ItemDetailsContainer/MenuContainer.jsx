import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Home/Menu";
import Products from "../Products/Products";

const MenuContainer = () => {
    return (
        <div className="container-fluid fondo_amarillo">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

export default MenuContainer;