import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppWithWagmi from './WagmiAuth'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithWagmi></AppWithWagmi>
  </StrictMode>,
)
