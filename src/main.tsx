import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Index from 'pages';
import Login from 'pages/login';
import Logout from 'pages/logout';
import { AuthProvider } from 'context/AuthContext';
import { ProtectedRoute } from 'components/ProtectedRoute';
import App from './App';

import './index.scss';
// https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/',
            element: <Index />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
