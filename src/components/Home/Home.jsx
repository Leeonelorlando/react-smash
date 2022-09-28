import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Destacado from "./Destacado";
import Menu from "./Menu";

const Home = () => {
    return (
        <div className="container-fluid fondo_amarillo">
            <Header />
            <Destacado />
            <Menu />
            <Footer />
        </div>
    )
}

export default Home;