import React from "react";
import twitter from "../images/SM-RRSS-01.png";
import youtube from "../images/SM-RRSS-02.png";
import instagram from "../images/SM-RRSS-03.png";
import facebook from "../images/SM-RRSS-04.png";

const Footer = () => {
    return (
        <div className="row fondo_marron p-5">
            <div className="col">
                <div className="container text-white">
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p>TM © 2022 Smashed Babies Burgers Corporation. Todos los derechos reservados.</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <img src={facebook} width="30" alt="facebook" /> 
                            <img src={instagram} width="30" alt="instagram" /> 
                            <img src={youtube} width="30" alt="youtube" /> 
                            <img src={twitter} width="30" alt="twitter" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;