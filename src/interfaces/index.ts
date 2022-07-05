export interface IStyles {
    style?: React.CSSProperties;
    className?: string; 
}

export interface ITitle extends IStyles {title:string}
export interface IDescription extends IStyles{desc:string}
export interface IImage extends IStyles {src:string}
export interface IButton extends IStyles {label: string,  background?: string }
export interface IIconButton extends IStyles {icon: JSX.Element,  background?: string }
export interface IListItem extends IStyles {text:string}


export interface ICard extends IStyles{
    uid: string; 
    id:number;
    background?: Colors;
    title:string;
    desc:string;
    src:string;
}


export interface IRestrictions extends IStyles{
    restrictions?: RestrictionsType
}

export interface IQuestion extends IStyles {
    uid:string;
    question: string;
    solution: string | number | string [];
}

type RestrictionsType = 
    | "Sin Turno" 
    | "Grilletes"
    | "Carcel"
    | "Copiar Restricciones"

type Colors = 
    | 'DarkOliveGreen' 
    | 'MediumOrchid' 
    | 'Tomato'
    | 'DarkBlue'
    | 'DarkGoldenRod'
    | 'DarkSlateGrey'
    | 'FireBrick'
    | 'Tan'