import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import Library from '../components/Library/Library';
import Search from '../components/Search/Search';
import Settings from '../components/Settings/Settings';
import NotFound from '../components/NotFound/NotFound';
import App from '../components/App/App';

const APP = '/';
const HOME = '/home';
const LIBRARY = '/library';
const SEARCH = '/search';
const SETTINGS = '/settings';
const ACCOUNTS = '/accounts';
const ABOUT = '/about';
const LANGUAGE = '/language';
const LOCATION = '/location';
const HELP = '/help';
const NOT_FOUND = '*';

export default (
  <Switch>
    <Route
      path={APP}
      component={App}
      onChange={(prevState, nextState) => {
        if (nextState.location.action !== 'POP') {
          window.scrollTo(0, 0);
        }
      }}
    >
      <Route path={HOME} component={Home}/>
      <Route path={LIBRARY} component={Library}/>
      <Route path={SEARCH} component={Search}/>
      <Route path={SETTINGS} component={Settings}/>
      {/*<Route component={RestrictedPage}>*/}
      {/*<Route path="/mosaic" component={MosaicPage}/>*/}
      {/*<Route path="/recommended" component={RecommendedPage}/>*/}
      {/*<Route path="/artists" component={ArtistsPage}/>*/}
      {/*</Route>*/}
      <Route path={NOT_FOUND} component={NotFound}/>
    </Route>
  </Switch>

);


// export default  [
//   {
//     name: 'home',
//     path: HOME
//   },
//   {
//     name: 'library',
//     path: LIBRARY
//   },
//   {
//     name: 'search',
//     path: SEARCH
//   },
//   {
//     name: 'settings',
//     path: SETTINGS,
//     children: [
//       {
//         name: 'accounts',
//         path: ACCOUNTS
//       },
//       {
//         name: 'about',
//         path: ABOUT
//       },
//       {
//         name: 'language',
//         path: LANGUAGE
//       },
//       {
//         name: 'location',
//         path:LOCATION
//       },
//       {
//         name: 'help',
//         path: HELP
//       }
//     ]
//   },
// ];