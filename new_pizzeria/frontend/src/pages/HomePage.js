import React from 'react';
import '../styles/components/pages/HomePage.css'


const HomePage = (props) => {
    return (
        <main>
            <div className="mainimg">
                <img src="img/home/img01.jpg" alt="pizzeria" />
            </div>
            <div className="holder">
                <div className="homeimg">
                    <img src="img/logo6.png" alt="La Ramona Logo"/>
                </div>
                <div className="informacion">
                    <p><span className="cat">Teléfono:</span> 1123456789</p>
                    <p><span className="cat">Dirección:</span> Calle 123, Barrio</p>
                </div>
            </div>
        </main>
    );
}

export default HomePage;