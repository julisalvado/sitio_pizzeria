import React from 'react';
import '../styles/components/pages/MenuPage.css'


const MenuPage = (props) => {
    return (
        <main class="menuholder">
            <h1>MENÚ</h1>
            <div class="columnas">
                <div class="col">
                    <div class="grupocomida">
                        <h3>Entradas</h3>
                        <ul class="comida">
                            <li>Ensalada Mixta</li>
                            <li>Picada</li>
                            <li>Empanadas</li>
                        </ul>
                    </div>
                    <div class="grupocomida">
                        <h3>Bebidas</h3>
                        <ul class="comida">
                            <li>Agua</li>
                            <li>Agua Saborizada</li>
                            <li>Gaseosa</li>
                            <li>Cerveza</li>
                            <li>Vino</li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="grupocomida">
                        <h3>Pizzas</h3>
                        <ul class="comida">
                            <li>Muzzarella</li>
                            <li>Margarita</li>
                            <li>Fugazzeta</li>
                            <li>Fugazza</li>
                            <li>Napolitana</li>
                            <li>Jamón y Morrones</li>
                            <li>Calabresa</li>
                            <li>Especial</li>
                            <li>Cuatro Quesos</li>
                            <li>Criolla</li>
                            <li>De Carne</li>
                            <li>De Pollo</li>
                            <li>Vegetariana</li>
                            <li>De Jamón Crudo</li>
                            <li>De Roquefort</li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="grupocomida">
                        <h3>Postres</h3>
                        <ul class="comida">
                            <li>Queso y Dulce de Batata</li>
                            <li>Flan Mixto</li>
                            <li>Copa Helada</li>
                            <li>Brownie con Helado</li>
                            <li>Volcán de Chocolate</li>
                        </ul>
                    </div>
                </div>
            </div>
        
        
        </main>

    );
}

export default MenuPage;