import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DeckProvider } from './context/deck'
import { TableProvider } from './context/table'
import { UIProvider } from './context/UI'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <UIProvider>
          <DeckProvider>
            <TableProvider >
              <App />
            </TableProvider>
          </DeckProvider>
       </UIProvider>

  </React.StrictMode>
)
