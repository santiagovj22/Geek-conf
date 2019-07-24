import React from 'react';
import Slider1 from '../assets/img/medellin1.png';
import Slider2 from '../assets/img/medellin2.png';
import Slider3 from '../assets/img/medellin3.png';


const Main = () => {
    return(
        <main id="main">
        <div className="carousel carrusel slide carousel-fade" data-ride="carousel" data-pause="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Slider1} className="d-block w-100" alt="Medellin 1"/>
                </div>
                <div className="carousel-item">
                    <img src={Slider2} className="d-block w-100" alt="Medellin 2"/>
                </div>
                <div className="carousel-item">
                    <img src={Slider3} className="d-block w-100" alt="Medellin 3"/>
                </div>
                <div className="overlay">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 offset-md-6 text-center text-md-right">
                                <h1>Geek Conf Medellín</h1>
                                <p className="d-none d-md-block">Geek conf realiza su primer Demo Day con la cohorte de 
                                    Línea 1: FrontEnd, donde los Geeks entrenados evidencian
                                    por medio de un proyecto todas las habilidades y conocimientos
                                    técnicos adquiridos durante el curso.
                                </p>
                                <a href="/" className="btn btn-outline-light">Quiero ser orador</a>
                                <button type="button" className="btn btn-geek btn-primary" data-toggle="modal " data-target="#modalCompra">Comprar Tickets</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}

export default Main;