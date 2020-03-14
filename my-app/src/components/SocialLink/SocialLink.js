import React from 'react';
import './SocialLink.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLink = ({item: {name, link, icon, color}}) => {
  return (
    <a className="socialLink" href={link} title={name} target="_blank">
      <FontAwesomeIcon color={color} icon={icon}/>
    </a>
  );
};

export default SocialLink;
