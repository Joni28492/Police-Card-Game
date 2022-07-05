import { IRestrictions } from '../../interfaces/index';




export const Restricciones = ({style,className,restrictions}:IRestrictions) => {
  return (
    <div style={style} className={className}>
        {
            (restrictions) 
            ?<strong style={{color:'red'}}>{restrictions}</strong>
            :<strong>No Hay Restricciones</strong>
            
        }
    </div>
  )
}
