import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí agregarías la lógica para autenticar al usuario
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data);
      // Manejar el éxito de la autenticación
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      // Manejar errores
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Contraseña:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
