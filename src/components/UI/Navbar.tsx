import { IListItem } from '../../interfaces'
import { useContext } from 'react';
import { ScreensType, UIContext } from '../../context/UI';

export const Navbar = () => {

  const {setScreen} = useContext(UIContext)

    // const handleSetScreen = (screen:ScreensType) =>{
    //     setScreen(screen);
    // }

  return (
   
    <ul  style={{
        position: 'sticky',
        marginLeft: 0,
        marginTop: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly'
    }}>
        <div
            style={{cursor: 'pointer'}} 
            onClick={()=>setScreen("Stars")}>
            <ListItem text='Estrellas'/>
        </div>
        <div
            style={{cursor: 'pointer'}} 
            onClick={()=>setScreen("Restrictions")}>
            <ListItem text='Restricciones'/>
        </div>
        <div
            style={{cursor: 'pointer'}} 
            onClick={()=>setScreen("Questions")}>
            <ListItem text='Preguntas'/>
        </div>
    
        <div 
            style={{cursor: 'pointer'}} 
            onClick={()=>setScreen("Deck")}>
            <ListItem text='Baraja'/>
        </div>
                    
    </ul>
  
  )
}




 const ListItem = ({text, style, className}:IListItem) => {
  return (
    <li 
        className={className}
        style={{
            color: 'white',
            listStyle: 'none',
            marginTop: 12,
            ...style
        }}
    >{text}</li>
  )
}

