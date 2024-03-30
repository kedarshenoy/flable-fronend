import { atom, selector } from 'recoil';
import axios from 'axios'

export const chatAtom = atom({
    key: 'chatAtom',
    default: 0,
  });

  export const useratom =atom({
    key:'useratom',
    default:1
  })

export const questionsatom =atom({
    key:"questionsatom",
    default: selector({
        key:"questionselector",
        get:async()=>{
            const userID = 1;
            const res=await  axios.get("http://localhost:5402/allquestions", {
                data: { userID }
              })
            return res.data 
        }
    })
})


export const chatsarrayAtom=atom({
    key:'chatatom',
    default:[
            ]
})