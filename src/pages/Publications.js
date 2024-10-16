import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

function Publications() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch publicaciones desde el backend
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error al obtener las publicaciones', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Publicaciones por Región</h2>
      {posts.length === 0 ? (
        <p>No hay publicaciones disponibles.</p>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}

export default Publications;