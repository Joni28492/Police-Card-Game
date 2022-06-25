import { ITitle, IDescription, IImage, ICard, IButton } from '../interfaces/index';
import logo from '../favicon.svg'

export const Card = ({src, title, desc, background, style}:ICard) => {
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

          <Button label='Usar' />
          <Button label='Descartar' background='darkred' />
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
          // backgroundColor:'green',
          color: 'lightgray',
          borderRadius: '6px',
          border: '1px solid transparent',
          marginLeft:'4px',
          marginRight:'4px',
          fontSize: '24px',
          height: '40px',
          ...style
        }}
       >{label}</button>
    
  )
}

