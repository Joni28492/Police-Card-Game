import { ICard } from '../interfaces/index';


export const deleteElementCard = (cardToDel:ICard, arrToModify:ICard[]):ICard[] =>{


    //!FIX
    const index =  arrToModify.indexOf(cardToDel)
    arrToModify = arrToModify.splice(index, 1)
   
   
    return arrToModify;

}