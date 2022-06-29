import React, { useContext } from 'react'
import { TableContext } from '../context/table';
import { ICard } from '../interfaces/index';
import { cards } from '../data/cards';

export const MiniCard = (cardOnHand:ICard) => {



    const {id, title,  src, background, uid} = cardOnHand;
    const {setCardOnTable} = useContext(TableContext)

    const useCardOnTable = () =>{
        setCardOnTable(cardOnHand);
        // console.log("carta cambiada " + id);
    }

  return (
    <div 
    onClick={useCardOnTable}    
    style={{
        backgroundColor: (background) ? background : 'LightSlateGrey',
        height: '140px',
        width: '90px',
        margin:'5px',
        borderRadius: '10px',
        border: '2px solid lightgrey',
        overflow: 'hidden'
    }}>

        <div style={{
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center',
            
        }}>
            <img src={src} alt="" width={'80px'} style={{
                width: '80px',
                marginTop: '5px'
            }} />

            <span style={{
                color: 'white',
                fontWeight: 700,
              
            }}> {title} </span>
        </div>


    </div>
  )
}
