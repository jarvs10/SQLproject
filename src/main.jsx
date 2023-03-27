import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import LineaM from './pages/LineaM';
import UpdateIdH from './pages/UpdateIdH';
import UpdateIdM from './pages/UpdateIdM';
import EditarContextHProvider from './context/EditarContextHProvider';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Index />
      },
      {
        path: '/lineam',
        element: <LineaM />
      },
      {
        path: '/updateH/:id',
        element: <UpdateIdH />
      },
      {
        path: '/updateM/:id',
        element: <UpdateIdM />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EditarContextHProvider>
      <RouterProvider router={routes} />
    </EditarContextHProvider>
  </React.StrictMode>,
)
