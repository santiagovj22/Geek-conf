import React from 'react';
import Nara from '../assets/img/speaker1.jpg';
import Ana from '../assets/img/speaker2.jpg';
import Catalina from '../assets/img/speaker3.jpg';

const TeamSpeakers = () => {
    return(
        <section id="speakers" className="mt-4 mb-4">
        <div className="container">
            <div className="row">
                <div className="col text-center text-uppercase">
                    <small>Conoce a los</small>
                    <h2>Oradores</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card" >
                        <img src={Nara} className="card-img-top" alt="Foto de Catalina" />
                        <div className="card-body">
                            <div className="badges mb-2">
                                <span className="badge badge-warning">HTML</span>
                                <span className="badge badge-info">HTML 5</span>
                            </div>
                            <h5 className="card-title mb-0 ">Narayana Salamanca</h5>
                            <p className="card-text">Actualizaciones de HTML en su versión 5 y buenas prácticas de estructura</p> 
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card" >
                        <img src={Ana} className="card-img-top" alt="Foto de Catalina" />
                        <div className="card-body">
                            <div className="badges mb-2">
                                    <span className="badge badge-warning">CSS</span>
                                    <span className="badge badge-info">SASS</span>
                            </div>
                            <h5 className="card-title mb-0">Ana Restrepo</h5>
                            <p className="card-text">Colocando estilos y dando forma a nuestras páginas web haciendo uso de CSS </p> 
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card" >
                        <img src={Catalina} className="card-img-top" alt="Foto de Catalina" />
                        <div className="card-body">
                            <div className="badges mb-2">
                                    <span className="badge badge-warning">JavaScript</span>
                                    <span className="badge badge-info">ECS6</span>
                                </div>
                            <h5 className="card-title mb-0">Catalina Escobar</h5>
                            <p className="card-text">Como usar JavaScript con sus mejoras a nivel de asincronismo, promesas y callbacks</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default TeamSpeakers;