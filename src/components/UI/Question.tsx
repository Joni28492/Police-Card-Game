
import { useState } from 'react'
import { IQuestion } from '../../interfaces'
import { Button } from '../Card'

export const Question = ({question,solution, className,style, stars}:IQuestion) => {


    const [showAnswer, setShowAnswer] = useState<boolean>(false);

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


        <div style={{
            display: 'flex'
        }}>
            <Button label={'Resuelta'} />
            <Button label={'Random'} style={{backgroundColor: 'mediumseagreen'}} />
            <div onClick={()=>setShowAnswer(!showAnswer)}>
                <Button  label={
                    (showAnswer) ?'Hide':'Show'
                } style={{backgroundColor: 'black'}} />
            </div>

        </div>

    </section>
  )
}
