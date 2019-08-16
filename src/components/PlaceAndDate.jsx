import React from 'react';
import Place from '../assets/img/tesoro.jpg';

const PlaceDate = () => {
    return(
        <section id="place-time">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6 pl-0 pr-0">
                    <img src={Place} alt="El Tesoro" />
                </div>
                <div className="col-12 col-lg-6 pt-4 pb-4 ">
                    <h4>Centrol Comercial el Tesoro - Agosto 2019</h4>
                    <p>Centro comercial en Medellín, con una variada 
                        oferta en moda, servicios, tecnología, 
                        restaurantes, entretenimiento y mucho más. 
                        Un parque comercial para toda la familia.
                    </p>
                    <a className="btn btn-outline-light " href="https://eltesoro.com.co/">Conoce más</a>
                </div>
            </div>
        </div>

    </section>
    );
}

export default PlaceDate;