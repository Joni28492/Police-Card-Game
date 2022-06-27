import { useContext } from 'react'
import { DeckContext } from '../../context/deck'
import { MiniCard } from '../MiniCard'
import { Button } from '../Card';

import {v4 } from 'uuid'


export const Mano = () => {

  const {hand, drawCard} = useContext(DeckContext)


  return (
  
    <div style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    {
      hand.map(({title, desc, src, background, id})=>(
       
          <MiniCard 
                key={v4()}
                id={id}
                title={title} 
                desc={desc} 
                src={src} 
                background={background}
                style={{margin:'15px'}} 
          />
      ))
    }

    <div onClick={drawCard}>
      <Button label={'robar'}  />
    </div>
    
  </div>
  )
}
