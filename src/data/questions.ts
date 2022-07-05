import { IQuestion } from "../interfaces";
import {v4 as uuid} from 'uuid'

export const questions: IQuestion[] = [
    {
        uid: uuid(),
        question: "Quien ostenta la Jefatura de la policia local",
        solution: "El Alcalde"
    },
    {   uid: uuid(),
        question: "Quien nombra a los miembros del tribunal constitucional segun el Art 159 de la CE",
        solution: "El Rey"
    },
    {   uid: uuid(),
        question: "En que Art. de la CE se recoge el principio de jerarquia normativa",
        solution: 9
    },
    {   uid: uuid(),
        question: "",
        solution: ""
    },
    {   uid: uuid(),
        question: "",
        solution: ""
    },
    {   uid: uuid(),
        question: "",
        solution: ""
    },

]