import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { RouterProvider } from 'react-router5';
import createRouter from './../src/router/create-router';
import './styles/index.css';

const router = createRouter();

router.start(() => {
  ReactDOM.render(
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>,
    document.getElementById('root')
  );
});
