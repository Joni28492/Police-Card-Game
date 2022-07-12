import { IRestrictions } from '../../interfaces/index';
import {v4 as uuid} from 'uuid'
import { Grilletes } from './restrictions/Grilletes';
import { SinTurno } from './restrictions/SinTurno';
import { CopyRestrictions } from './restrictions/CopyRestrictions';



export const Restricciones = ({style,className,restrictions}:IRestrictions) => {
  return (
    <div 
      style={{
        marginTop: '15px',
        display:'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        ...style
      }} 
      className={className}>
        {
              <div  style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
              }}>

                <Grilletes />
                <SinTurno />
                <CopyRestrictions />
              </div>
            
        }
    
    {/* <i style={{fontSize: '45px'}} className="fa-solid fa-handcuffs" />
    <i style={{fontSize: '45px'}} className="fa-brands fa-keycdn" />
    <i style={{fontSize: '45px'}} className="fa-solid fa-person-chalkboard" />
    */}
    
    </div>
  )
}
