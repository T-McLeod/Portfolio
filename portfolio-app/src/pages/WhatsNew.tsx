import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import './WhatsNew.css';

interface PostData {
  title: string;
  message: string;
  link: string;
  image?: string;
}

const WhatsNew: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/posts/')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="whats-new">
      <h2>What's New?</h2>
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          message={post.message}
          link={post.link}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default WhatsNew;