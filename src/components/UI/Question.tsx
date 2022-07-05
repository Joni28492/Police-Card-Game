
import { IQuestion } from '../../interfaces'
import { Button } from '../Card'

export const Question = ({question,solution, className,style}:IQuestion) => {
  return (
    <section style={{
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
        
        <span style={{
            marginTop: '15px',
            marginBottom: '15px',
        }}>{solution}</span>

        <div style={{
            display: 'flex'
        }}>
            <Button label={'Resuelta'} />
            <Button label={'Fallada'} style={{backgroundColor: 'darkred'}} />
            <Button label={'Random'} style={{backgroundColor: 'mediumseagreen'}} />
            <Button label={'Hide'} style={{backgroundColor: 'black'}} />

        </div>

    </section>
  )
}
