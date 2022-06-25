

import { useContext } from 'react';
import { Card } from './components'
import { DeckContext } from './context/deck';

import './App.css'



function App() {

  const {hand, deck} = useContext(DeckContext)

  return (

        <div className="App">
        
          
            <div style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
              {
                hand.map(({title, desc, src, background})=>(
                    <Card 
                          key={title}
                          title={title} 
                          desc={desc} 
                          src={src} 
                          background={background}
                          style={{margin:'15px'}} 
                    />
                ))
              }
              
            </div>
        
        </div>

  )
}

export default App
