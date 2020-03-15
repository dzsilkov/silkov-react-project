import React from 'react';
import { useRouteNode } from 'react-router5';
import Accounts from '../Accounts/Accounts';
import NotFound from '../NotFound/NotFound';
import About from '../About/About';
import Language from '../Language/Language';
import Location from '../Location/Location';
import Help from '../Help/Help';

const SettingsOutlet = () => {

  const { route } = useRouteNode('settings');
  const settingsRouteName = route.name.split('.')[1];

  if (settingsRouteName === 'accounts') {
    return <Accounts />
  }

  if (settingsRouteName === 'about') {
    return <About />
  }

  if (settingsRouteName === 'language') {
    return <Language />
  }

  if (settingsRouteName === 'location') {
    return <Location />
  }

  if (settingsRouteName === 'help') {
    return <Help />
  }

  return <NotFound />
};

export default SettingsOutlet;
