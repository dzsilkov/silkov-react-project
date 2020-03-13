import React from 'react';
import { BaseLink, useRoute } from 'react-router5';

function Nav() {
  const {router} = useRoute();

  const menuItems = [
    {
      title: 'Смотреть',
      link: '#'
    },
    {
      title: 'Фильмы',
      link: '#'
    },
    {
      title: 'Медиатека',
      link: '#'
    },
    {
      title: 'Поиск',
      link: '#'
    },
    {
      title: 'Настройки',
      link: '#'
    },
  ];

  return (
    <nav>
      <BaseLink
        router={router}
        routeName="home"
        routeOptions={{reload: true}}
      >
        Home
      </BaseLink>
      <BaseLink router={router} routeName="about">
        About
      </BaseLink>
      <BaseLink router={router} routeName="search">
        Search
      </BaseLink>
      <BaseLink router={router} routeName="settings">
        Settings
      </BaseLink>
    </nav>
  );
}

export default Nav;