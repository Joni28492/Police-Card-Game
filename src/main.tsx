import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DeckProvider } from './context/deck'
import { UIProvider } from './context/UI'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <UIProvider>
          <DeckProvider>
            <App />
          </DeckProvider>
       </UIProvider>

  </React.StrictMode>
)
