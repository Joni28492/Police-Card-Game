import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DeckProvider } from './context/deck'
import { PlayerProvider } from './context/player'
import { QuestionProvider } from './context/questions'
import { TableProvider } from './context/table'
import { UIProvider } from './context/UI'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
   
      <UIProvider >
      <PlayerProvider>
          <QuestionProvider>
            <DeckProvider>
              <TableProvider >
                <App />
              </TableProvider>
            </DeckProvider>
          </QuestionProvider>
        </PlayerProvider>
      </UIProvider>
      
    </React.StrictMode>

)
