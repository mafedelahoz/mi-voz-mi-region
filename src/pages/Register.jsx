import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí agregarías la lógica para registrar al usuario
    try {
      const response = await axios.post('/api/register', { name, region, email, password });
      console.log(response.data);
      // Manejar el éxito del registro
    } catch (error) {
      console.error('Error al registrar', error);
      // Manejar errores
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Región:</label>
          <input type="text" className="form-control" value={region} onChange={(e) => setRegion(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Contraseña:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
