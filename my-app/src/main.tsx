import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

import App from './App'
import home from './routes/home'
import produtos from './routes/produtos'
import editarProdutos from './routes/editarProdutos'
import error from './routes/error'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)