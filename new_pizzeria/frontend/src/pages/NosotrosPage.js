import React from 'react';
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h1>Historia</h1>
                <div className="cuadrohistoria">
                    <img src="img/nosotros/foto1.jpg" alt=""/>
                    <div className="infohistoria">
                        <h3>1992</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat accusamus expedita hic consectetur doloribus ducimus odit nam quae alias accusantium eveniet nihil ratione ut, porro dicta suscipit vitae repudiandae? Libero.</p>
                    </div>
                </div>
                <div className="cuadrohistoria">
                    <img src="img/nosotros/foto2.jpg" alt=""/>
                    <div className="infohistoria">
                        <h3>1994</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat accusamus expedita hic consectetur doloribus ducimus odit nam quae alias accusantium eveniet nihil ratione ut, porro dicta suscipit vitae repudiandae? Libero.</p>
                    </div>
                </div>
                <div className="cuadrohistoria">
                    <img src="img/nosotros/foto3.jpg" alt=""/>
                    <div className="infohistoria">
                        <h3>2000</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat accusamus expedita hic consectetur doloribus ducimus odit nam quae alias accusantium eveniet nihil ratione ut, porro dicta suscipit vitae repudiandae? Libero.</p>
                    </div>
                </div>
                <div className="cuadrohistoria">
                    <img src="img/nosotros/foto4.jpg" alt=""/>
                    <div className="infohistoria">
                        <h3>2024</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat accusamus expedita hic consectetur doloribus ducimus odit nam quae alias accusantium eveniet nihil ratione ut, porro dicta suscipit vitae repudiandae? Libero.</p>
                    </div>
                </div>
            </div>
            
        </main>
    );
}

export default NosotrosPage;