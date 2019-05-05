import React, { Component } from 'react';

class Peliculas extends Component {
    render() {
        return (
            <section id="peliculas" classNameName="section-padding">
                <div classNameName="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-12">
                                <div className="section-title-header text-center">
                                    <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Películas</h1>
                                    <p className="wow fadeInDown color" data-wow-delay="0.2s">Diferentes películas en diferentes formatos (1080p, 720p).</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <div className="about-item">
                                    <img className="img-fluid" src="assets/img/about/quieren.jpg" alt=""></img>
                                    <div className="about-text">
                                        <h3><a href="#">Lo que ellos quieren</a></h3>
                                        <p>Ali Davis adquiere un don mágico: es capaz de oír lo que los hombres están pensando. A partir de ese momento, usará su habilidad para triunfar en un mundo de hombres, el de los agentes deportivos, y firmar un contrato con una estrella del basket.</p>
                                        <a class="btn btn-common btn-rm" href="#">próximamente</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <div className="about-item">
                                    <img className="img-fluid" src="assets/img/about/aquaman.jpg" alt=""></img>
                                    <div className="about-text">
                                        <h3><a href="#">Aquaman</a></h3>
                                        <p>Aquaman debe recuperar el legendario Tridente de Atlan para salvar a la ciudad subacuática de Atlantis, y al mundo de la superficie, de su hermano hambriento de poder.</p>
                                        <a class="btn btn-common btn-rm" href="#">próximamente</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <div className="about-item">
                                    <img className="img-fluid" src="assets/img/about/cita.jpg" alt=""></img>
                                    <div className="about-text">
                                        <h3><a href="#">Cita Perfecta</a></h3>
                                        <p>La cita perfecta es una película estadounidense dirigida por Chris Nelson y estrenada en la plataforma Netflix en 2019. Es una comedia romántica protagonizada por Noah Centineo, Laura Marano y Camila Mendes.​ La película está basada en la novela "The Stand-In" de Steven Bloom.</p>
                                        <a class="btn btn-common btn-rm" href="#">próximamente</a>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>    
            </section>
        )
    }
}

export default Peliculas;