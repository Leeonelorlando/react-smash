import React from "react";
import { Link } from "react-router-dom";

const Destacado = () => {
    return (

<div className="container my-5">
<Link to="/category/hamburguesas">
<div className="row">
<div className="card-titulo tamaño text-center my-2">
            SELECCIONA CUALQUIER IMAGEN PARA VER LAS BURGUERS
            </div>
    <div className="col-md-4">
        <img src="images/HISTORIA CHEESE BABY.jpg" width={400} alt="Burger1" className="img-fluid rounded" />
    </div>
    <div className="col-md-4">
        <img src="images/HISTORIA ONION BABY.jpg" width={400} alt="Burger2" className="img-fluid rounded" />
    </div>
    <div className="col-md-4">
        <img src="images/HISTORIA QUARTER BABY.jpg" width={400} alt="Burger3" className="img-fluid rounded" />
    </div>
</div>
</Link>
</div>      
    )
}

export default Destacado;