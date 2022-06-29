import { ICard } from '../interfaces/index';

//TODO Robos de  2 en 2, corregir


export const deleteElementCard = (cardToDel:ICard, arrToModify:ICard[]):ICard[] =>{
    
    const filtredArr = arrToModify.filter( c => c.uid !== cardToDel.uid )
        console.log("carta eliminada", filtredArr)
        return filtredArr;

}

export const deleteFirstAndReturnArr = (arr:ICard[]):ICard[]  =>{


    const cardDel = arr!.shift();
    console.log("carta para top", cardDel)
    return arr;
  
}

export const addedFirstPlace = (arrToAdded:ICard[], cardToAdded: ICard):ICard[] =>{

    const arrToTop = [cardToAdded, ...arrToAdded]
    console.log("carta en Top" , arrToTop);
    return arrToTop;
}