import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';



//paginas
import Home from './routes/Home/Home'
import Notes from './routes/Notes/Notes'
import Register from './routes/auth/Register/Register';
import Login from './routes/auth/Login/Login';
import PrivateRoute from './routes/auth/privateRouter/PrivateRouter';
import { AuthProvider } from './contexts/AuthProvider';


const Router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: "/notes",
        element: <PrivateRoute><Notes></Notes></PrivateRoute>
      },
      {
        path: '/notes',
        element: <Notes />
      },

      {
        path: '*',
        element: <Navigate to="/" />
      },
    ]
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={Router} />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
