const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/create-post', upload.single('image'), async (req, res) => {
  
  try {
    console.log('Datos recibidos:', req.body); 
    const newPost = new Post({
      title: req.body.title,
      region: req.body.region,
      category: req.body.category,
      content: req.body.content,
      image: req.body.image || null, 
      author: req.body.author,
      email: req.body.email,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error al crear la publicación:', error);  
    res.status(500).json({ error: 'Error al crear la publicación' });}
});

// Ruta para obtener todas las publicaciones
router.get('/publications', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error al crear la publicación:', error); 
    res.status(500).json({ error: 'Error al crear la publicación' });
  }
});

// Ruta para la raíz de /posts
router.get('/', (req, res) => {
  res.send('Lista de posts');
});

module.exports = router;
