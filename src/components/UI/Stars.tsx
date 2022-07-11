
import { useState } from 'react';

interface IStars {
    stars:number
}

export const Stars = ({stars}:IStars) => {

    const [counterStars, setCounterStars] = useState(stars);
        


  return (
    <div style={{display:'flex', flexDirection: 'column'}}>
        
        <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
            <h3 style={{fontSize: '35px'}}>{counterStars}</h3>

            <i
               
                style={{
                color: 'goldenrod',
                fontSize: '36px'
            }} className="fa-solid fa-star" />    

            
        </div>
        
        <label>Stars</label>


        <div style={{
            display: 'flex', 
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'center',
        
            }}>

            <i  style={{
                fontSize: '35px',
                color: 'lightgreen',
                marginRight: '25px',
            }}
                onClick={()=>setCounterStars(counterStars+1)}
                className="fa-solid fa-circle-plus" />
            <i  style={{
                fontSize: '35px',
                color: 'firebrick',
                marginLeft: '25px',
            }}
                onClick={()=>setCounterStars(counterStars-1)}
                className="fa-solid fa-circle-minus" />

        </div>
    </div>
    
  )
}
