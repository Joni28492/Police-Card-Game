


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
import { QuestionContext, QuestionProvider } from '../../context/questions';

interface ITable  {
    restrictions?: IRestrictions [];
}



export const Tablero = ({restrictions}:ITable) => {


const {card} = useContext(TableContext)
const {toggleHand, screen} = useContext(UIContext)

const {question} = useContext(QuestionContext)



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
              <Question 
                id={question.id} 
                uid={question.uid} 
                question={question.question}
                solution={question.solution} 
                stars={question.stars} 
                hint={question.hint}
                />
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
          <div onClick={ toggleHand }>
            <IconButton 
              icon={<i className="fa-solid fa-hand"/>} 
            />
          </div>

      </div>
  )
}
