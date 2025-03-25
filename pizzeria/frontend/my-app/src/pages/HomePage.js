import React from 'react';

const HomePage = (props) => {
    return (
        <main className="homeimg">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="pizza" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, interdum vel fermentum vulputate mollis venenatis pretium ornare, aliquet eros pharetra metus pellentesque in. Dapibus consequat nunc ad arcu suscipit purus parturient diam sociosqu varius congue, accumsan duis primis nisl phasellus massa rhoncus metus a imperdiet, torquent class ullamcorper interdum proin sodales sed lacinia urna tempor.</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Juan Perez</span>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default HomePage;