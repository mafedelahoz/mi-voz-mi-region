import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="card mb-3">
      {post.image && <img src={post.imageUrl} className="card-img-top" alt={post.title} />}
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content.substring(0, 100)}...</p>
        <p className="card-text">
          <small className="text-muted">Región: {post.region}</small>
        </p>
        <Link to={`/publications/${post.id}`} className="btn btn-primary">Leer más</Link>
      </div>
    </div>
  );
}

export default PostCard;
