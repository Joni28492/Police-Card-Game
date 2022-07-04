export interface IStyles {
    style?: React.CSSProperties;
    className?: string; 
}

export interface ITitle extends IStyles {title:string}
export interface IDescription extends IStyles{desc:string}
export interface IImage extends IStyles {src:string}
export interface IButton extends IStyles {label: string,  background?: string }

export interface ICard extends IStyles{
    uid: string; 
    id:number;
    background?: Colors;
    title:string;
    desc:string;
    src:string;
}

// export interface IUniqueICard extends ICard{
//     uid:string;
// }

type Colors = 
    | 'DarkOliveGreen' 
    | 'MediumOrchid' 
    | 'Tomato'
    | 'DarkBlue'
    | 'DarkGoldenRod'
    | 'DarkSlateGrey'
    | 'FireBrick'
    | 'Tan'