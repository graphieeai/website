import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home, Dashboard, Solution } from './pages';
import reportWebVitals from './reportWebVitals';
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/solution",
    element: <Solution/>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* Header */}

    <RouterProvider router={router} />
    {/* footer */}
  </React.StrictMode>
);

reportWebVitals();
