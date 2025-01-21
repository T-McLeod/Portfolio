import React from 'react';
import './Post.css';

interface PostProps {
  title: string;
  message: string;
  link: string;
  image?: string;
}

const Post: React.FC<PostProps> = ({ title, message, link, image }) => {
  return (
    <div className="post">
      {image && <img src={image} alt={title} className="post-image" />}
      <h3>{title}</h3>
      <p>{message}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  );
};

export default Post;