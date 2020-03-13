import React from 'react'
import { useRouteNode } from 'react-router5'
import Home from '../Home/Home';
import About from '../About/About';
import Search from '../Search/Search';
import { Settings } from '../Settings/Settings';
import NotFound from '../NotFound/NotFound';

function Main(props) {
  const { route } = useRouteNode('');
  const topRouteName = route.name.split('.')[0];

  if (topRouteName === 'home') {
    return <Home />
  }

  if (topRouteName === 'about') {
    return <About />
  }

  if (topRouteName === 'search') {
    return <Search />
  }

  if (topRouteName === 'settings') {
    return <Settings />
  }


  return <NotFound />
}

export default Main
