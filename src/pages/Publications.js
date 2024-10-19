import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap importado

function Publications() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const regions = [
    'Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá', 'Caldas',
    'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca',
    'Guainía', 'Guaviare', 'Huila', 'La Guajira', 'Magdalena', 'Meta', 'Nariño',
    'Norte de Santander', 'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia',
    'Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada'
  ];

  const categories = ['social', 'ambiental', 'economica', 'otras'];

  useEffect(() => {
    fetch('http://localhost:5000/posts/publications')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data); // Inicialmente mostrar todas las publicaciones
      })
      .catch(error => console.log(error));
  }, []);

  // Función para manejar el filtro
  const handleFilterChange = () => {
    let filtered = posts;

    if (selectedRegion) {
      filtered = filtered.filter(post => post.region === selectedRegion);
    }

    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered); // Actualizar publicaciones filtradas
  };

  // Actualizar el filtro cuando cambia la región o categoría
  useEffect(() => {
    handleFilterChange();
  }, [selectedRegion, selectedCategory]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Publicaciones</h2>

      {/* Filtros */}
      <div className="row mb-4">
        <div className="col-md-6">
          <label>Filtrar por región:</label>
          <select
            className="form-select"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="">Todas las regiones</option>
            {regions.map((regionOption) => (
              <option key={regionOption} value={regionOption}>
                {regionOption}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label>Filtrar por categoría:</label>
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categories.map((categoryOption) => (
              <option key={categoryOption} value={categoryOption}>
                {categoryOption}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Publicaciones */}
      {filteredPosts.length > 0 ? (
        <div className="row">
          {filteredPosts.map(post => (
            <div className="col-md-4 mb-4" key={post._id}>
              <div className="card h-100">
                {post.image && (
                  <img 
                    src={`http://localhost:5000/uploads/${post.image}`} 
                    className="card-img-top" 
                    alt={post.title} 
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <strong>Autor:</strong> {post.author} <br />
                    <strong>Región:</strong> {post.region} <br />
                    <strong>Categoría:</strong> {post.category} <br />
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No hay publicaciones disponibles.</p>
      )}
    </div>
  );
}

export default Publications;
