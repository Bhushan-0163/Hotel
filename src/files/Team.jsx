import React from 'react';
import './Team.css'; // Import external CSS

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      description: 'John leads our team with over 20 years of industry experience and a passion for culinary excellence.',
      imgSrc: 'member1.jpg', // Replace with actual image paths
    },
    {
      name: 'Sarah Smith',
      role: 'Head Chef',
      description: 'Sarah brings innovative flavors to our kitchen, creating unforgettable dining experiences for our guests.',
      imgSrc: 'member2.jpg',
    },
    {
      name: 'Michael Brown',
      role: 'Event Manager',
      description: 'Michael specializes in curating perfect events, handling every detail to ensure memorable occasions.',
      imgSrc: 'member3.jpg',
    },
  ];

  return (
    <section className="team-section">
      <h1>Meet Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.imgSrc} alt={member.name} />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
