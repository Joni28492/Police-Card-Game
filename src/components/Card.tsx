import { ITitle, IDescription, IImage, ICard, IButton } from '../interfaces/index';
import logo from '../favicon.svg'
import { useContext } from 'react';
import { DeckContext } from '../context/deck';
import { TableContext } from '../context/table/TableContext';




export const Card = (card:ICard) => {
  const  {src, title, desc, background, id,uid, style} = card;

  const {discardCard,putOnDeck,useCard} = useContext(DeckContext)
  const {deleteCardOnTable} = useContext(TableContext)


  const handleUseCard=(cardToUse:ICard)=>{
    useCard(cardToUse)
    deleteCardOnTable()
  }
  const handleDiscard=(cardToDiscard:ICard)=>{
    discardCard(cardToDiscard)
    deleteCardOnTable()
  }


  const handleToDeck = (cardToDeck:ICard) =>{
    putOnDeck(cardToDeck)
    deleteCardOnTable()
  }
  
  return (
    <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          width: "300px",
          height:'400px',
          backgroundColor: (background) ? background: 'LightSlateGrey',
          borderRadius: '15px',
          border: `12px solid LightGrey`,
          ...style,
        }}
    >
        
      <Title title={title} />
      <Image src={src} />
      <Description desc={desc} />

        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-end'
        }}>

          
     
          <div onClick={() => handleUseCard(card)}>
            <Button label='Usar' />
          </div>
    
          <div onClick={() => handleDiscard(card)}>
            <Button label='Descartar' background='darkred' />
          </div>
      
          <div onClick={()=>handleToDeck(card)}>
            <Button label='Al Deck' background='goldenrod' />
          </div>
        </div>
    
    
    </div>
  )
}




export const Title = ({title, style}:ITitle) => {
  return (
    <h3 style={{
        ...style,
        color: 'white'
    }}>{title}</h3>
  )
}



export const Description = ({desc, style}:IDescription) => {
  return (
    <p style={{
        color: 'white',
        fontSize: '16px',
        overflow: 'hidden',
        margin:'15px',
        ...style,
    }}>{desc}</p>
  )
}




export const Image = ({src=logo, style}:IImage) => {
  return (
    <div
        style={{
            display:'flex',
            justifyContent:'center',
            width: '250px',
            height: '180px',
            borderRadius: '10px',
            overflow: 'hidden',
            ...style,
        }}
    >
        <img src={src} alt="" />

    </div>
  )
}







export const Button = ({label, background,style, className}:IButton) => {
  return (
    
       <button
       className={className}
        style={{
          backgroundColor:(background)?background:'green',
          color: 'lightgray',
          borderRadius: '16px',
          border: '1px solid transparent',
          marginLeft:'4px',
          marginRight:'4px',
          fontSize: '18px',
          height: '26px',
          ...style
        }}
       >{label}</button>
    
  )
}

