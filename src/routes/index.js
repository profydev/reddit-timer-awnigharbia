import React from 'react';
import { useRoutes } from 'react-router-dom';
import { PATH_HOME, PATH_SEARCH } from './paths';

import Search from '../pages/search';
import Home from '../pages/home';
import App from '../App';

export default function Router() {
  return useRoutes([
    {
      path: PATH_HOME,
      element: <App />,
      children: [
        { element: <Home />, index: true },
        {
          path: PATH_SEARCH,
          element: <Search />,
        },
      ],
    },
    {
      path: '*',
      element: <div>404 Not found</div>,
    },
  ]);
}
