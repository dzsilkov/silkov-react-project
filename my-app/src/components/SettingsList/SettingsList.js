import React from 'react';
import SettingsListItem from '../SettingsListItem/SettingsListItem';
import './SettingsList.css';


const SettingsList = ({settingsItems, handlerHover}) => {

  const settingsList = settingsItems.map(item => {
    return (
      <SettingsListItem
        key={item.id}
        item={item}
        handlerHover={handlerHover}
      />
    );
  });

  return (
    <nav>
      <ul className="settingsList">
        {settingsList}
      </ul>
    </nav>
  );
};

export default SettingsList;
