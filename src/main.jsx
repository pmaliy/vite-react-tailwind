import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import './index.css';

import { App } from '@/App.jsx';
import { ErrorPage } from '@/components/ErrorPage';
import { Tasks } from '@/components/Tasks';
import { UserList, User } from '@/components/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Tasks />,
      },
      {
        path: 'tasks',
        element: <Tasks />,
      },
      {
        path: 'users',
        element: <UserList />,
      },
      {
        path: 'users/:userId',
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
