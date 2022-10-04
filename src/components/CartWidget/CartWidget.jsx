import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../Context/Context";
import carrito from "../images/basket.svg";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
        <div>
        <Link to={"/cart"}>
            <button type="button" className="btn fondo_naranja position-relative color_header" title="Ir al Carrito">
                <img src={carrito} alt="Carrito" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal() > 0 ? cartTotal() : ""}</span>
            </button>
        </Link>
    </div>
)
}

export default CartWidget;