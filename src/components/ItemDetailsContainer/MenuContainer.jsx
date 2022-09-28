import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Home/Menu";

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