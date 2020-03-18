import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

import { RouterProvider } from 'react-router5';
import { router } from './router/router';
import './styles/tailwind.css';
import App from './components/App/App';

router.start(() => {
  render(
    <Provider store={store}>
      <RouterProvider router={router}>
        <App/>
      </RouterProvider>
    </Provider>,
    document.getElementById('root')
  );
});
