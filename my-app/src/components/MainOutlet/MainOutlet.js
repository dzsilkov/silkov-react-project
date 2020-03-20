import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';


import Home from '../Home/Home';
import Search from '../Search/Search';
import Settings from '../Settings/Settings';
import NotFound from '../NotFound/NotFound';
import Library from '../Library/Library';
import BooksList from '../../containers/BooksList/BooksList';
import BookDetail from '../BookDetails/BookDetail';

const HOME = '/home';
const LIBRARY = '/library';
const SEARCH = '/search';
const SETTINGS = '/settings';
const BOOK_DETAIL = `/books/:id`;

const ACCOUNTS = '/accounts';
const ABOUT = '/about';
const LANGUAGE = '/language';
const LOCATION = '/location';
const HELP = '/help';
const NOT_FOUND = '*';

const MainOutlet = () => {
  return (
    <Switch>
      <Route path={HOME} component={BooksList}/>
      <Route path={BOOK_DETAIL} component={BookDetail}/>
      <Route path={LIBRARY} component={Library}/>
      <Route path={SEARCH} component={Search}/>
      <Route path={SETTINGS} component={Settings}/>
      <Route path={NOT_FOUND} component={NotFound}/>
    </Switch>
  );
};

export default MainOutlet;