import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BmiProvider} from './BmiContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BmiProvider>
<App />
  </BmiProvider>
    </StrictMode>,
)
