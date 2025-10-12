import React from "react";
import "./OurTeam.css";

const teamMembers = [
  { name: "Walter White", role: "Co-Founder & Co-CEO" },
  { name: "Jesse Pinkman", role: "Co-Founder & Co-CEO" },
  { name: "Skyler White", role: "Chief Operating Officer" },
  { name: "Saul Goodman", role: "Chief Legal Officer" },
  { name: "Walter Jr", role: "Junior Developer" },
  { name: "Mike Ehrmantraut", role: "Security" },
  { name: "Tuco Salamanca", role: "Chief of Staff" },
  { name: "Gustavo Fring", role: "Chief Financial Officer" },
];

const OurTeam = () => {
  return (
    <div className="ourteam-page">
      <div className="team-header">
        <h1>Our Team</h1>
        <p className="breadcrumb">Home &gt; Corporate &gt; Our Team</p>

        <h3 className="intro">
          At the roots of Crosson, there is 20 years of experience in food
          industry that is filled with research, increasing efficiency and
          producing solution for{" "}
          <span className="highlight">food, quality, automation and software.</span>
        </h3>

        <p className="description">
          Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image"></div>
            <p className="role">{member.role}</p>
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
