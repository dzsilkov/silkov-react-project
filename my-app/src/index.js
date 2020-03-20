import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { Router } from 'react-router-dom';
import routes from './router/routes';


import { createBrowserHistory } from 'history';


import { RouterProvider } from 'react-router5';
import { router } from './router/router';
import './styles/tailwind.css';
import App from './components/App/App';

const history = createBrowserHistory();
const rootElement = document.getElementById('root');

// router.start(() => {
//   render(
//     <Provider store={store}>
//       {/*<RouterProvider router={router}>*/}
//         <App/>
//       {/*</RouterProvider>*/}
//     </Provider>,
//     document.getElementById('root')
//   );
// });


const renderApp = () => {
  render(
    <Provider store={store}>
      <Router
        history={history}
      >
        <App/>
      </Router>
    </Provider>,
    rootElement
  );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App/App', renderApp);
}

renderApp();
