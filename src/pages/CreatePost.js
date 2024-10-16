import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [region, setRegion] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Crear un objeto FormData para manejar la imagen
    const formData = new FormData();
    formData.append('title', title);
    formData.append('region', region);
    formData.append('category', category);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      const response = await axios.post('/api/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response.data);
      // Manejar el éxito de la publicación
    } catch (error) {
      console.error('Error al crear la publicación', error);
      // Manejar errores
    }
  };

  return (
    <div className="col-md-8 offset-md-2">
      <h2>Crear Publicación</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Título:</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Región:</label>
          <input type="text" className="form-control" value={region} onChange={(e) => setRegion(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Categoría:</label>
          <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Selecciona una categoría</option>
            <option value="social">Social</option>
            <option value="ambiental">Ambiental</option>
            <option value="economica">Económica</option>
            <option value="otras">Otras</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Contenido:</label>
          <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        </div>
        <div className="mb-3">
          <label>Imagen (opcional):</label>
          <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit" className="btn btn-primary">Publicar</button>
      </form>
    </div>
  );
}

export default CreatePost;
