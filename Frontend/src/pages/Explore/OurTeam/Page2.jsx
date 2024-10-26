// src/Page2.js
import React, { useState } from 'react';
import image1 from '../../../assets/images/team1.jpeg';
import image2 from '../../../assets/images/team2.jpeg';
import image3 from '../../../assets/images/team3.jpeg';
import image4 from '../../../assets/images/team4.jpeg';
import image5 from '../../../assets/images/team5.jpeg';
import image6 from '../../../assets/images/team6.jpeg';
import './Page2.css'; // Import the external CSS file

const teamData = [
  {
    id: 1,
    name: 'Vignesh Vasanth',
    role: 'Fullstack Developer',
    experience: '6 years',
    location: 'Sathyamangalam, India',
    email: 'vigneshvasanthc@gmail.com',
    image: image1,
    description: 'Experienced in building scalable web applications with Angular, Node.js, and MongoDB.',
  },
  {
    id: 2,
    name: 'Devvidyasagar',
    role: 'DevOps Engineer',
    experience: '3 years',
    location: 'Sathyamangalam, India',
    email: 'devvidyasagar@gmail.com',
    image: image2,
    description: 'Specializes in cloud infrastructure, CI/CD pipelines, and containerization.',
  },
  {
    id: 3,
    name: 'Jeevan',
    role: 'Full-Stack Developer',
    experience: '4 years',
    location: 'Coimbatore, India',
    email: 'jeevan@gmail.com',
    image: image3,
    description: 'Expert in coding RESTful API development, database access and server-side languages.',
  },
  {
    id: 4,
    name: 'Gopal Chandru',
    role: 'Full-Stack Developer',
    experience: '6 years',
    location: 'Coimbatore, India',
    email: 'gopalchandru@gmail.com',
    image: image4,
    description: 'Focuses on RESTful API development, databases, and server-side optimizations.',
  },
  {
    id: 5,
    name: 'Dharun',
    role: 'UI/UX Designer',
    experience: '5 years',
    location: 'Coimbatore, India',
    email: 'dharun@gmail.com',
    image: image5,
    description: 'Designs engaging and user-friendly interfaces with a keen eye for aesthetics.',
  },
  {
    id: 6,
    name: 'Yogesh Kumar',
    role: 'Frontend Developer',
    experience: '1 year',
    location: 'Sathyamangalam, India',
    email: 'yogeshkumar.s.radha@gmail.com',
    image: image6,
    description: 'Specializes in JavaScript frameworks, accessibility, and performance optimization including React and its libraries.',
  },
];

const Page2 = () => {
  const [activeMember, setActiveMember] = useState(null);

  const openModal = (member) => {
    setActiveMember(member);
  };

  const closeModal = () => {
    setActiveMember(null);
  };

  return (
    <div className="page2-container-unique">
      <h1 className="page2-title-unique">Our Team of potential abilities</h1>
      <p className="page2-intro-unique">
        Meet our dedicated team of professionals who are passionate about creating impactful
        solutions and delivering excellence in every project.
      </p>
      <div className="page2-grid-unique">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="page2-card-unique page2-card-hover-unique"
            onClick={() => openModal(member)}
          >
            <img
              className="page2-profile-image-unique"
              src={member.image}
              alt={member.name}
            />
            <div className="page2-member-info-unique">
              <h2 className="page2-name-unique">{member.name}</h2>
              <p className="page2-role-unique">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {activeMember && (
        <div className="page2-modal-overlay-unique" onClick={closeModal}>
          <div
            className="page2-modal-content-unique"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="page2-close-button-unique" onClick={closeModal}>
              &times;
            </button>
            <img
              className="page2-modal-image-unique"
              src={activeMember.image}
              alt={activeMember.name}
            />
            <h2 className="page2-modal-header-unique">{activeMember.name}</h2>
            <p className="page2-modal-details-unique">
              <strong>Role:</strong> {activeMember.role}
            </p>
            <p className="page2-modal-details-unique">
              <strong>Experience:</strong> {activeMember.experience}
            </p>
            <p className="page2-modal-details-unique">
              <strong>Location:</strong> {activeMember.location}
            </p>
            <p className="page2-modal-details-unique">
              <strong>Email:</strong> {activeMember.email}
            </p>
            <p className="page2-modal-details-unique">
              <strong>Description:</strong> {activeMember.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page2;
