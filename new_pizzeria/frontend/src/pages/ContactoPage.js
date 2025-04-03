import React from 'react';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <input type="text" name="" placeholder="Nombre"/>
                    </p>
                    <p>
                        <input type="text" name="" placeholder="Email"/>
                    </p>
                    <p>                  
                        <input type="text" name="" placeholder="Teléfono"/>
                    </p>
                    <p>                  
                        <textarea type="text" name="" placeholder="Mensaje"></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar" /></p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <ul>
                    <li>Teléfono: 43242388</li>
                    <li>Email: contacto@transportesx.com.ar</li>
                    <li>Instagram: @laramona.pizzeria</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;