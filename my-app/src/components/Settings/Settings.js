import React from 'react';


export const settingsItems = [
  {
    title: 'Учётные записи',
    status: false
  },
  {
    title: 'Информация',
    status: false
  },
  {
    title: 'Язык',
    status: false
  },
  {
    title: 'Ограничения',
    status: false
  },
  {
    title: 'Справка',
    status: false
  },
];

export class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settingsItems: []
    };
  }

  componentDidMount() {
  }


  render() {
    return (
      <section>
        <h2>Settings</h2>
      </section>
    );
  }
}