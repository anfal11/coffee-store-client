import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffee from './Components/AddCoffee.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import UpdateCoffee from './Components/UpdateCOffee.jsx';
import Signup from './Components/Signup.jsx';
import Signin from './Components/Signin.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './Components/Users.jsx';
import UpdateUser from './Components/UpdateUser.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch('http://localhost:5000/coffee'),
    errorElement: <ErrorPage />
  },
  {
    path: "/addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch('http://localhost:5000/users'),
  },
  {
    path: "/updateUser/:id",
    element: <UpdateUser />,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  }
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
