import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FlashifyProvider } from '@ajmal_n/flashify-react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlashifyProvider>
      <App />
    </FlashifyProvider>
  </StrictMode>,
)
