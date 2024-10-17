import React from 'react';
import { Link } from 'react-router-dom';
// Importa la imagen del logo
import logo from '../assets/mivoz.png';

function Home() {
  return (
    <div className="text-center">
      {/* Agrega el logo en el encabezado */}
      
      <h1>Bienvenido a Mi Voz, Mi Región</h1>
      <img src={logo} alt="Logo de Mi Voz, Mi Región" className="logo" style={{ width: '600px', marginBottom: '20px' }} />
      <p>Escucha y comparte las voces de las minorías en Colombia.</p>
      <Link to="/publications" className="btn btn-primary">Explorar Publicaciones</Link>

    </div>
  );
}

export default Home;
