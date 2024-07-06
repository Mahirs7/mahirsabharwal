import React from 'react';
import './SkillComponent.css';

const SkillComponent = ({ name }) => {
  return (
    <div className="skill-bubble">
      {name}
    </div>
  );
}

export default SkillComponent;
