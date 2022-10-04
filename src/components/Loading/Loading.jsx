import React from "react";
import Logo from "../images/SMASHED BABIES LOGO 3.png";

const Loading = () => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <p><img src={Logo} alt="SmashedBabies" width="180" /></p>
                <h3>Cargando...</h3>
            </div>
        </div>
    )
}

export default Loading;