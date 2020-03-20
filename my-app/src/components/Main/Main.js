import React from 'react';
import { useRouteNode } from 'react-router5';
import NotFound from '../NotFound/NotFound';
import BooksScreen from '../../containers/BooksScreen/BooksScreen';
import BookDetail from '../BookDetails/BookDetail';
import Library from '../Library/Library';
import Settings from '../Settings/Settings';
import Auth from '../Auth/Auth';

const Main = () => {
  const {route} = useRouteNode('');
  const topRouteName = route.name.split('.')[0];
  const routeId = route.params.id;

  if (topRouteName === 'books') {
    return <BooksScreen/>;
  }

  if (topRouteName === 'book') {
    return <BookDetail id={routeId}/>;
  }

  if (topRouteName === 'library') {
    return <Library/>;
  }
  if (topRouteName === 'auth') {
    return <Auth/>;
  }
  if (topRouteName === 'settings') {
    return <Settings/>;
  }
  return <NotFound/>;
};


export default Main;