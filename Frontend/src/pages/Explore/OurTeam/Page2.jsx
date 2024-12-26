import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Page2.css'; // Import the external CSS file
import image1 from '../../../assets/images/team1.jpeg';
import image2 from '../../../assets/images/team2.jpeg';
import image3 from '../../../assets/images/team3.jpeg';
import image4 from '../../../assets/images/team4.jpeg';
import image5 from '../../../assets/images/team5.jpeg';
import image6 from '../../../assets/images/team6.jpeg';

const teamImages = [image1, image2, image3, image4, image5, image6];

const Page2 = () => {
  const { t } = useTranslation();
  const [activeMember, setActiveMember] = useState(null);

  const openModal = (member) => {
    setActiveMember(member);
  };

  const closeModal = () => {
    setActiveMember(null);
  };

  // Convert JSON object structure into an array for iteration
  const teamDataObject = t('team2', { returnObjects: true }) || {};
  const teamData = Object.keys(teamDataObject)
    .filter((key) => key.startsWith('teamMember'))
    .map((key, index) => ({
      ...teamDataObject[key],
      id: index + 1,
      image: teamImages[index],
    }));

  return (
    <div className="page2-container-unique">
      <h1 className="page2-title-unique">{t('team2.title')}</h1>
      <p className="page2-intro-unique">{t('team2.intro')}</p>
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
              <strong>{t('team2.role')}:</strong> {activeMember.role}
            </p>
            <p className="page2-modal-details-unique">
              <strong>{t('team2.experience')}:</strong> {activeMember.experience}
            </p>
            <p className="page2-modal-details-unique">
              <strong>{t('team2.location')}:</strong> {activeMember.location}
            </p>
            <p className="page2-modal-details-unique">
              <strong>{t('team2.email')}:</strong> {activeMember.email}
            </p>
            <p className="page2-modal-details-unique">
              <strong>{t('team2.description')}:</strong> {activeMember.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page2;
