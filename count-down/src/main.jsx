import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';

import HomeRoute from './routes/HomeRoute/HomeRoute.jsx';
import CountDownRoute from './routes/CountDownRoute.jsx';

import {
  CountdownProvider
} from './context/CountdownContext.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <HomeRoute />
        },
        {
          path: '/countdown',
          element: <CountDownRoute />
        }
      ]
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountdownProvider>
      <RouterProvider router={router} />
    </CountdownProvider>
  </React.StrictMode>,
)
