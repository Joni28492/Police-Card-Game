import { cards } from '../data/cards';
import { ICard } from '../interfaces/index';

//TODO Robos de  2 en 2, corregir



//* Listo
export const deleteById = (hand:ICard[], uid:string):ICard[] =>{
    return hand.filter(c=>c.uid!==uid)
}

//* Listo
export const deleteFirstAndReturnArr = (arr:ICard[]):ICard[]  =>{
    const uidUnique = arr[0].uid;
    return arr.filter( c=> c.uid !== uidUnique ) ;
}

export const addedFirstPlace = (arrToAdded:ICard[], cardToAdded: ICard):ICard[] =>{

    const arrToTop = [cardToAdded, ...arrToAdded]
    console.log("carta en Top" , arrToTop);
    return arrToTop;
}

//TODO generar ramdom deck
//! no hace falta
// const getRandomInt = (min:number, max:number):number => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// export const ramdonDeckInRange=(existingCards:number, sizeOfDeck:number):ICard[]=>{
//     let deck: ICard | [] =[];

//     for (let i = 0; i <=sizeOfDeck; i++) {
//         const r = getRandomInt(0, existingCards);
//         console.log(r)
//         //add card by Id
//     }


//      return deck
// }