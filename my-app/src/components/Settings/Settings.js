import React from 'react';
import './Settings.css';
import { faUserCircle, faCogs, faGlobe, faQuestion, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import SettingsList from '../SettingsList/SettingsList';
import SettingsLogo from '../SettingsLogo/SettingsLogo';
import SettingsOutlet from '../SettingsOutlet/SettingsOutlet';

export const settingsItems = [
  {
    id: 'accounts',
    title: 'Accounts',
    status: false,
    icon: faUserCircle,
    active: 'active',
    link: '/settings/accounts',
    routeOptions: {
      reload: true
    }
  },
  {
    id: 'about',
    title: 'About',
    status: false,
    icon: faCogs,
    active: 'inActive',
    link: '/settings/about',
    routeOptions: {}
  },
  {
    id: 'language',
    title: 'Language',
    status: false,
    icon: faGlobe,
    active: 'inActive',
    link: '/settings/language',
    routeOptions: {}
  },
  {
    id: 'location',
    title: 'Location',
    status: false,
    icon: faLocationArrow,
    active: 'inActive',
    link: '/settings/location',
    routeOptions: {}
  },
  {
    id: 'help',
    title: 'Help',
    status: false,
    icon: faQuestion,
    active: 'inActive',
    link: '/settings/help',
    routeOptions: {}
  },
];

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settingsItems: [],
      hoveredItem: {}
    };

    this.handlerHover = this.handlerHover.bind(this);
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        settingsItems: [...prevState.settingsItems, ...settingsItems],
      };
    });
  }

  handlerHover(id) {
    this.setState(prevState => {
      const newSettingsItems = prevState.settingsItems.find(item => {
        return item.id === id;
      });
      return ({
        hoveredItem: {...newSettingsItems}
      });
    });
  }

  render() {
    const {settingsItems, hoveredItem} = this.state;
    return (
      <section className="settings">
        <div className="settings-col">
          <SettingsLogo hoveredItem={hoveredItem}/>
        </div>
        <div className="settings-col">
          <SettingsList settingsItems={settingsItems} handlerHover={this.handlerHover}/>
          <SettingsOutlet/>
        </div>
      </section>
    );
  }

}

export default Settings;