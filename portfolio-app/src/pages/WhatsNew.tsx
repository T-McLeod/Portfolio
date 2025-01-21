import React from 'react';
import Post from '../components/Post';
import './WhatsNew.css';

const WhatsNew: React.FC = () => {
  const posts = [
    {
      title: 'Summer 2025: Internship at Capital One',
      message: 'I have recently accepted a summer internship at Capital One as a software engineer.',
      link: 'https://www.capitalonecareers.com/get-ahead-with-early-career-programs-for-students',
      image: '//tbcdn.talentbrew.com/company/234/gst_v1_0/img/logo-capital-one.svg'
    },
    {
      title: 'Elected Vice President of Pi Kappa Alpha',
      message: 'I was elected as the Vice President of the Alpha Alpha chapter of Pi Kappa Alpha, or PIKE, for the upcoming school year.',
      link: 'https://example.com/blog-post',
      image: '//upload.wikimedia.org/wikipedia/en/thumb/9/90/Pi_Kappa_Alpha_Coat_of_Arms.png/220px-Pi_Kappa_Alpha_Coat_of_Arms.png'
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