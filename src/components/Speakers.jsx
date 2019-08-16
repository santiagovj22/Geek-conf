import React from 'react';

const Speakers = () => {
    return(
        <section id="conviertete-en-orador" className="pt-4 pb-3">
        <div className="container">
            <div className="row">
                <div className="col text-uppercase text-center">
                    <small >
                        Conviértete en un
                    </small>
                    <h2>ORADOR</h2>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    Anótate como orador para dar una charla <abbr data-toggle="tooltip" title="Charlas de 5 minutos"> ignite </abbr> 
                    Cuentanos de que quieres hablar
                </div>
            </div>
            <div className="row">
                <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-12 col-md-6">
                                <input type="text" className="form-control" placeholder="Nombre" />
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <input type="text" className="form-control" placeholder="Apellido" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <textarea name="text" className="form-control form-control-lg" placeholder="Sobre qué quieres hablar"></textarea>
                                <small className="form-text text-muted">
                                    Recuerda incluir un título para tu charla
                                </small>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <button type="button" className="btn-geek btn btn-block btn-primary">Enviar</button>
                            </div>
                        </div>
                        </form>
                </div>
            </div>       
        </div>
    </section>
    );
}

export default Speakers;
