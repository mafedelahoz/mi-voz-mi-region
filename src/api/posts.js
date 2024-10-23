// api/posts.js
import connectDB from './connectDB';
import Post from './models/Post';

// Crear publicación
export default async function handler(req, res) {
  await connectDB();  // Conecta a la base de datos

  if (req.method === 'POST') {
    try {
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
      return res.status(201).json(newPost);
    } catch (error) {
      console.error('Error al crear la publicación:', error);
      return res.status(500).json({ error: 'Error al crear la publicación' });
    }
  }

  // Obtener todas las publicaciones
  if (req.method === 'GET') {
    try {
      const posts = await Post.find();
      return res.status(200).json(posts);
    } catch (error) {
      console.error('Error al obtener publicaciones:', error);
      return res.status(500).json({ error: 'Error al obtener publicaciones' });
    }
  }

  // Método no permitido
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
