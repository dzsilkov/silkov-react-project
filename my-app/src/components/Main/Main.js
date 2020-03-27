import React from 'react';
import { useRouteNode } from 'react-router5';
import { router } from '../../router/router';
import NotFound from '../NotFound/NotFound';
import BooksScreen from '../../containers/BooksScreen/BooksScreen';
import Settings from '../Settings/Settings';
import LibraryScreen from '../../containers/LibraryScreen/LibraryScreen';
import User from '../../containers/User/User';
import BookDetail from '../../containers/BookDetail/BookDetail';


const Main = ({isAuth}) => {
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
    return <LibraryScreen isAuth={isAuth}/>;
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