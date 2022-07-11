
import { useState, useContext } from 'react';
import { QuestionContext } from '../../context/questions';
import { IQuestion } from '../../interfaces'
import { Button } from '../Card'
import confetti from 'canvas-confetti'

export const Question = ({question,solution, className,style, stars, hint}:IQuestion) => {


    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [showHint, setShowHint] = useState<boolean>(false)
    const {setRandomQuestion} = useContext(QuestionContext)

    const onToggleSuccess = () =>{

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        })
    }

  return (
    <section 
    className={className}    
    style={{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        width: '550px',
        marginTop: '15px',
        marginBottom: '25px',
        backgroundColor: 'midnightblue',
        border: '2px solid lightgray',
        borderRadius: '15px',
        padding: '8px',
        ...style
    }}>
        <strong style={{ fontSize: 22}}>{question}</strong>
        

        {
            (showAnswer) && 
                <span style={{
                    marginTop: '15px',
                    marginBottom: '15px',
                }}>{solution}</span>
        }

                 

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h3 style={{ fontSize: '32px', marginRight: '5px'}}>{stars}</h3>
        <i  style={{ color: 'goldenrod', fontSize: '28px',}} className="fa-solid fa-star " />
        </div>


        {/* Pista si la hay */}
        {
            (showHint && hint) && 
            <div
                style={{
                    backgroundColor: 'SandyBrown',
                    borderRadius: '8px',
                    padding: '6px',
                    marginBottom: '12px'
                }}
            >{hint}</div>
        }

        <div style={{
            display: 'flex'
        }}>
            <div onClick={onToggleSuccess}>
                <Button label={'Resuelta'} />
            </div>

            <div onClick={()=>setShowHint(!showHint)}>
                <Button style={{backgroundColor: 'SaddleBrown'}} label={'pista'} />
            </div>
            
            <div onClick={ ()=>setRandomQuestion() }>
                <Button label={'Random'} style={{backgroundColor: 'mediumseagreen'}} />
            </div>
            


            <div onClick={()=>setShowAnswer(!showAnswer)}>
                <Button  label={
                    (showAnswer) ?'Hide':'Show'
                } style={{backgroundColor: 'black'}} />
            </div>

        </div>

    </section>
  )
}
