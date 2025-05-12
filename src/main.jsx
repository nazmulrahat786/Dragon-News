import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './routs/router.jsx'
import AurhProvider from './provider/AurhProvider.jsx'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AurhProvider>
    <RouterProvider router={router}></RouterProvider>
    </AurhProvider>
  </StrictMode>,
)
