import React from 'react';
import Post from './Post';
import './WhatsNew.css';

const WhatsNew: React.FC = () => {
  const posts = [
    {
      title: 'New Project Launched',
      message: 'I have just launched a new project. Check it out!',
      link: 'https://example.com/new-project',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Blog Post Published',
      message: 'Read my latest blog post on web development trends.',
      link: 'https://example.com/blog-post',
      image: 'https://via.placeholder.com/150'
    },
    // Add more posts as needed
  ];

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