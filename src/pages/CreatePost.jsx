import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [region, setRegion] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');  // Nuevo estado para el mensaje de éxito
  const [errorMessage, setErrorMessage] = useState('');      // Nuevo estado para el mensaje de error

  // Opciones para las regiones de Colombia
  const regions = [
    'Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá', 'Caldas',
    'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca',
    'Guainía', 'Guaviare', 'Huila', 'La Guajira', 'Magdalena', 'Meta', 'Nariño',
    'Norte de Santander', 'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia',
    'Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('title', title);
    formData.append('region', region);
    formData.append('category', category);
    formData.append('content', content);
    formData.append('author', author);
    formData.append('email', email);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/posts/create-post', formData.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      console.log(response.data);
      setSuccessMessage('La publicación se ha creado con éxito.');  // Mensaje de éxito
      setErrorMessage('');  // Limpiar cualquier mensaje de error
    } catch (error) {
      console.error('Error al crear la publicación', error);
      setErrorMessage('Hubo un error al crear la publicación.');  // Mensaje de error
      setSuccessMessage('');  // Limpiar cualquier mensaje de éxito
    }
  };

  return (
    <div className="col-md-8 offset-md-2">
      <h2>Crear Publicación</h2>

      {/* Mostrar mensaje de éxito o error */}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Título:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Selector para la Región */}
        <div className="mb-3">
          <label>Departamento:</label>
          <select
            className="form-select"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            required
          >
            <option value="">Selecciona un departamento</option>
            {regions.map((regionOption) => (
              <option key={regionOption} value={regionOption}>
                {regionOption}
              </option>
            ))}
          </select>
        </div>

        {/* Selector para la Categoría */}
        <div className="mb-3">
          <label>Categoría:</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="social">Social</option>
            <option value="ambiental">Ambiental</option>
            <option value="economica">Económica</option>
            <option value="otras">Otras</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Contenido:</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Autor:</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Imagen:</label>
          <input type="file" 
            className="form-control" 
            name="image"
            onChange={(e) => setImage(e.target.files[0])}  // Capturar el archivo seleccionado
          />
        </div>

        <button type="submit" className="btn btn-primary">Publicar</button>
      </form>
    </div>
  );
}

export default CreatePost;
