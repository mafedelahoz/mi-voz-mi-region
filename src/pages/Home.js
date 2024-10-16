import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1>Bienvenido a Mi Voz, Mi Región</h1>
      <p>Escucha y comparte las voces de las minorías en Colombia.</p>
      <Link to="/publications" className="btn btn-primary">Explorar Publicaciones</Link>
    </div>
  );
}

export default Home;
