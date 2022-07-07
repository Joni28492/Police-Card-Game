

import {  Card, IconButton } from '../Card'
// import { ICard } from '../../interfaces/index';
import { Stars } from './Stars';
import { useContext } from 'react';
import { TableContext } from '../../context/table';
import { UIContext } from '../../context/UI';
import { Restricciones } from './';
import { Question } from './Question';
import { IRestrictions } from '../../interfaces';

import {v4 as uuid} from 'uuid'
import { questions } from '../../data/questions';

interface ITable  {
    restrictions?: IRestrictions [];
}



export const Tablero = ({restrictions}:ITable) => {


const {card} = useContext(TableContext)
const {toggleHand, screen} = useContext(UIContext)

const showHideHand = () =>{
  toggleHand()
}




  return (
    <div style={{
        color: 'white',
        height: 'auto',
        backgroundColor: 'CadetBlue',
        display: 'flex',
        flexDirection: 'column',
      }}>

    
          { 
            (screen.includes("Stars")) && <Stars stars={4} />
          }
          {
            (screen.includes("Restrictions")) && <Restricciones restrictions={'Carcel'} />
          }
          
    

          {/*TODO DeckScreen */}
        

          <div style={{
            display:'flex', flexWrap: 'wrap', justifyContent: 'center'
          }}>

            {
              (screen.includes("Questions")) && 
              <Question uid={uuid()} question={questions[0].question} 
              solution={questions[0].solution} />
            }
            

            {/* Carta si esta seleccionda */}
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

          {/* No Funciona el toggle */}
          <div onClick={ showHideHand }>
            <IconButton 
              icon={<i className="fa-solid fa-hand"/>} 
            />
          </div>

      </div>
  )
}
