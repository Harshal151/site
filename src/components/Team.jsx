import React, { useState } from 'react';
import '../components/css/Team.css';
import photoimg  from '../image/profile_img.jpeg'

const Team = () => {
  const teamMembers = [
    
    {
      name: 'Priya Mhade',
      position: 'HR',
      image: photoimg,
      linkedIn: '/',
    },
    {
      name: 'Harshal Umasare',
      position: 'Software Engineer',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQExOfzKyPtdfA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711436528138?e=1740614400&v=beta&t=WE-9ttvdlZVvVgBjzrlrSWj2J7cW4tVmYP_rHxlsefE',
      linkedIn: 'https://www.linkedin.com/in/harshal-umasare-a247aa207/',
    },
    {
      name: 'Pritam Lambade',
      position: 'Software Engineer',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQEu5wmPaqT3qw/profile-displayphoto-shrink_400_400/B4DZQRryUvGgAg-/0/1735463480008?e=1741219200&v=beta&t=ypHWPr666o0BQh0s26MOnDuQe8TqOlG5bYljmu1RYLU',
      linkedIn: 'https://www.linkedin.com/in/mr-pritamlambade581/',
    },
    {
      name: 'Aditya Nivalkar',
      position: 'Software Engineer',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQGWR4S0URZ_VA/profile-displayphoto-shrink_400_400/B4DZQH2y6QHcAg-/0/1735298592930?e=1740614400&v=beta&t=_KSp1qM-2VYOvdFWeHW3K_vOysIKlM4FhAhhBwsVTLw',
      linkedIn: 'https://www.linkedin.com/in/aditya-nivalkar-16185b1a9/',
    },
  ];

  const [activeMember, setActiveMember] = useState(null);

  const handleCardClick = (member) => {
    setActiveMember(member);
  };

  const closePopup = () => {
    setActiveMember(null);
  };

  return (
    <section id="team" className="team">
      <h2>Our Team</h2>
      {/* <h2>Team</h2> */}
      <p>
        We are always looking for the right talent to join us on our way forward. If you are
        interested in working with us, feel free to have a look through our openings.
      </p>
      
      <div className="team-members">
        {teamMembers.slice(1).map((member, index) => (
          <div
            key={index}
            className="team-card-small"
            onClick={() => handleCardClick(member)}
          >
            <img src={member.image} alt={member.name} />
            <h4>{member.name}</h4>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
      <div className="team-leaders">
        {teamMembers.slice(0, 1).map((member, index) => (
          <div
            key={index}
            className="team-card-large"
            onClick={() => handleCardClick(member)}
          >
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        ))}
      </div>

      {activeMember && (
        <div className="team-popup" onClick={closePopup}>
          <div className="team-popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeMember.image} alt={activeMember.name} />
            <h3>{activeMember.name}</h3>
            <p>{activeMember.position}</p>
            
            <a href={activeMember.linkedIn} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            {/* <button onClick={closePopup}>Close</button> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
