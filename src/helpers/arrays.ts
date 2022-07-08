import { ScreensType } from '../context/UI';
import { cards } from '../data/cards';
import { ICard } from '../interfaces/index';





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


export const setScreensOnArr = (screen:ScreensType, actualScreen:ScreensType[]):ScreensType[] =>{
    let modifiedArr:ScreensType[] = []

    if(actualScreen.includes(screen)){
        modifiedArr = actualScreen.filter( s => s!== screen )
    }else{
        modifiedArr = [...actualScreen, screen]
    }


    return modifiedArr;
}



export const randomDeck = (existingCards:ICard[], deckSize:number ):ICard[] =>{

    let yourDeck: ICard[] = []
    let randomInt:number;

    for (let i = 0; i < deckSize; i++) {
        randomInt = getRandomInt(0, existingCards.length -1)
        yourDeck = [...yourDeck, existingCards[randomInt] ] 
    }

    return yourDeck;
}
export const randomHand = (existingCards:ICard[], handSize:number ):ICard[] =>{

    let yourHand: ICard[] = []
    let randomInt:number;

    for (let i = 0; i < handSize; i++) {
        randomInt = getRandomInt(1, existingCards.length -1)
        yourHand = [...yourHand, existingCards[randomInt] ] 
    }

    return yourHand;
}



const getRandomInt = (min:number, max:number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
