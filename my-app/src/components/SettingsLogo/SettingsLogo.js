import React from 'react';
import './SettingsLogo.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';


const SettingsLogo = ({hoveredItem: {icon}}) => {

  const logo = icon ? icon : faChevronRight;

  return (
    <div className="settingsLogo">
      <span className="settingsLogoContainer">
        <FontAwesomeIcon
          className="settingsLogoIcon"
          size="10x" icon={logo}/>
      </span>
    </div>
  );
};

export default SettingsLogo;
