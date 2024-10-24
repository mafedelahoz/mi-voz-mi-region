const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const dotenv = require('dotenv');

// Cargar variables de entorno desde .env
dotenv.config();

const uri = process.env.MONGODB_URI;

const upload = multer({ dest: 'uploads/' }); // Configura multer para almacenar archivos en la carpeta 'uploads'

const app = express();

// Middleware
app.use(cors({
  origin: '*', // Permite todas las fuentes
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type, Authorization'
}));
app.use(bodyParser.json()); // Para manejar JSON
app.use(bodyParser.urlencoded({ extended: true })); // Para manejar formularios URL-encoded
app.use(upload.single('image')); // Agrega el middleware de multer aquí si es necesario
const postsRoute = require('./routes/posts');  // Importa la ruta correctamente
app.use('/posts', postsRoute);

// Ruta para la raíz del servidor
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Mi Voz Mi Región');
});

// Conexión con MongoDB usando variable de entorno
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB conectado'))
  .catch((error) => console.log('Error conectando a MongoDB:', error));

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));