import React from 'react';
import { useRouteNode } from 'react-router5';
import NotFound from '../NotFound/NotFound';
import BooksScreen from '../../containers/BooksScreen/BooksScreen';
import BookDetail from '../BookDetails/BookDetail';
import Settings from '../Settings/Settings';
import LibraryScreen from '../../containers/LibraryScreen/LibraryScreen';
import User from '../../containers/User/User';

const Main = ({authUser, isLoggedIn}) => {
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
    return <LibraryScreen/>;
  }

  if (topRouteName === 'auth') {
    return <User/>;
  }

  if (topRouteName === 'settings') {
    return <Settings/>;
  }
  return <NotFound/>;
};


export default Main;