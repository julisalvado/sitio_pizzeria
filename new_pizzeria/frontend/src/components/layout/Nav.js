/*import React from 'react';*/
import {NavLink} from "react-router-dom";
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <div class="holder">
                <div class="logocontainer">
                    <a class="logo" href="index.html">
                        <img src="img/logo1.png" width= "100" alt="La Ramona Logo"/>
                    </a>
                </div>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive? "activo": undefined }>Home</NavLink></li>
                    <li><NavLink to="/menu" className={({isActive}) => isActive? "activo": undefined }>Menú</NavLink></li>
                    <li><NavLink to="/nosotros" className={({isActive}) => isActive? "activo": undefined }>Nosotros</NavLink></li>
                    <li><NavLink to="/galeria" className={({isActive}) => isActive? "activo": undefined }>Galería</NavLink></li>
                    <li><NavLink to="/novedades" className={({isActive}) => isActive? "activo": undefined }>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" className={({isActive}) => isActive? "activo": undefined }>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;

