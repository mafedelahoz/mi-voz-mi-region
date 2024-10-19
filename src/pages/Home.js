import React from 'react';
import { Link } from 'react-router-dom';
// Importa la imagen del logo y otras imágenes
import logo from '../assets/mivoz.png';
import colombiaImage from '../assets/mapa-colombia.jpg'; // Puedes agregar una imagen del mapa de Colombia
import communityImage from '../assets/community.jpg'; // Imagen representando a la comunidad

function Home() {
  return (
    <div className="home-container">
      {/* Sección del encabezado con el logo */}
      <header className="text-center mb-5">
        <img src={logo} alt="Logo de Mi Voz, Mi Región" className="logo" style={{ width: '500px', marginBottom: '20px' }} />
        <h1>Bienvenido a Mi Voz, Mi Región</h1>
        <p>Escucha y comparte las voces de las minorías en Colombia.</p>
        <Link to="/publications" className="btn btn-primary btn-lg mt-3">Explorar Publicaciones</Link>
      </header>

      {/* Sección de estadísticas */}
      <section className="statistics-section text-center my-5">
        <h2>Estadísticas Impactantes</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>6</h3>
            <p>Regiones de Colombia</p>
          </div>
          <div className="col-md-4">
            <h3>32</h3>
            <p>Departamentos conectados</p>
          </div>
          <div className="col-md-4">
            <h3>100%</h3>
            <p>Compromiso con las minorías</p>
          </div>
        </div>
      </section>

      {/* Sección de imágenes visuales */}
<section className="images-section my-5 text-center">
  <div className="row">
    <div className="col-md-6">
      <img src={colombiaImage} alt="Mapa de Colombia" className="img-fluid" style={{ borderRadius: '15px', height: '300px', width: '100%' }} />
      <p className="mt-3">Conectando las voces desde todas las regiones de Colombia.</p>
    </div>
    <div className="col-md-6">
      <img src={communityImage} alt="Comunidad" className="img-fluid" style={{ borderRadius: '15px', height: '300px', width: '100%' }} />
      <p className="mt-3">Dando visibilidad a las necesidades de las comunidades locales.</p>
    </div>
  </div>
</section>

      {/* Llamado a la acción final */}
      <section className="call-to-action text-center my-5">
        <h2>¿Tienes algo que decir?</h2>
        <p>No esperes más, comparte tu historia o ayuda a quienes lo necesitan.</p>
        <Link to="/create-post" className="btn btn-success btn-lg">Crear Publicación</Link>
      </section>
    </div>
  );
}

export default Home;
