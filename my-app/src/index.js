import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { RouterProvider } from 'react-router5';
import { router } from './router/router';
import './styles/tailwind.css';
import App from './components/App/App';
import firebase from 'firebase/app';
import { fireBaseApi } from './api/fireBase/fireBase';


firebase.initializeApp(fireBaseApi);


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


// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./components/App/App', renderApp);
// }
