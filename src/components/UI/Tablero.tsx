

import { Card } from '../Card'
import { ICard } from '../../interfaces/index';
import { Stars } from './Stars';
import { useContext } from 'react';
import { TableContext } from '../../context/table';



interface ITable  {
    restrictions?: restrictions [];
    stars: number, 
}

type restrictions = 
    | 'grilletes' 
    | 'others restrictions' 

export const Tablero = ({restrictions, stars}:ITable) => {


const {card} = useContext(TableContext)



  return (
    <div style={{
        color: 'white',
        height: 'auto',
        backgroundColor: 'CadetBlue',
        display: 'flex',
        flexDirection: 'column',
      }}>

    

          <Stars stars={4} />

          <div style={{
            display:'flex', flexWrap: 'wrap', justifyContent: 'center'
          }}>


            {
              (card) &&
                <Card 
                    key={card.id}
                    uid={card.uid}
                    id={card.id}
                    title={card.title} 
                    desc={card.desc} 
                    src={card.src} 
                    background={card.background}
                    style={{margin:'15px'}} 
                />
            }


          </div>


      </div>
  )
}
