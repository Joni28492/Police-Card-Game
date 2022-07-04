import { ITitle, IDescription, IImage, ICard, IButton } from '../interfaces/index';
import logo from '../favicon.svg'




export const Card = (card:ICard) => {
  const  {src, title, desc, background, id,uid, style} = card;


  
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

          
     
          <div onClick={() => console.log("Usar Carta, y la pila de descartes")}>
            <Button label='Usar' />
          </div>
    
          <div onClick={() => console.log("DescartarCarta y a la pila de descartes, eliminar de tablero")}>
            <Button label='Descartar' background='darkred' />
          </div>
      
          <div onClick={()=>console.log("Poner carta en el deck y eliminar del tablero")}>
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

