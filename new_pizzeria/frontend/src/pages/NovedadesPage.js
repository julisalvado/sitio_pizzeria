import React from 'react';
import '../styles/components/pages/NovedadesPage.css';

import {useState, useEffect} from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {

    const [loading, setloading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setloading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setloading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <main className="novedadesholder">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} />
                )
            )}
        </main>
    );
}

export default NovedadesPage;

//<div className="novedades">
//                <h3>TITULO</h3>
  //              <h4>subtitulo</h4>
    //            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aperiam dignissimos minus non fugiat dicta repudiandae sapiente vitae doloribus? Sint commodi tempora beatae sed aliquam accusantium similique laboriosam repellat quasi.</p>   
      //      </div>
        //    <div className="novedades">
          //      <h3>TITULO</h3>
            //    <h4>subtitulo</h4>
              //  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aperiam dignissimos minus non fugiat dicta repudiandae sapiente vitae doloribus? Sint commodi tempora beatae sed aliquam accusantium similique laboriosam repellat quasi.</p>
//            </div>
  //          <div className="novedades">
    //            <h3>TITULO</h3>
      //          <h4>subtitulo</h4>
        //        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          //  </div>   
//            <div className="novedades">
  //              <h3>TITULO</h3>
    //            <h4>subtitulo</h4>
      //          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aperiam dignissimos minus non fugiat dicta repudiandae sapiente vitae doloribus? Sint commodi tempora beatae sed aliquam accusantium similique laboriosam repellat quasi.</p>
        //    </div>    