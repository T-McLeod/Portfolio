import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <ul>
        <li><strong>Phone:</strong> (123) 456-7890</li>
        <li><strong>Email:</strong> <a href="mailto:personal@example.com">personal@example.com</a></li>
        <li><strong>School Email:</strong> <a href="mailto:school@example.edu">school@example.edu</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
      </ul>
    </div>
  );
};

export default Contact;