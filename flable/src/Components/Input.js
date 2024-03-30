import '../Styles/inputs.css';
import { useState } from 'react';
import axios from 'axios';
import {chatAtom} from '../atoms';
import {useRecoilState}from 'recoil';
import {chatsarrayAtom} from '../atoms';


const Inputs=({questions, setquestions})=>{
    const [question,setquestion] =useState('');
    const [chat,setchat]=useRecoilState(chatAtom);
    // const [questions,setquestions]=useRecoilState(chatsarrayAtom)

    const askanswer=async()=>{
        const ans=await axios.post('http://localhost:5402/addquestions', {
            
                userid:1,
                Chatno:1,
                question:question
            
          })

          console.log(ans.data);
          const updatedQuestions = [...questions, ans.data];
        //   console.log(updatedQuestions);
          setquestions(updatedQuestions);

        
          

          
    }
return <>
            <div className='inputboxes'>
                       <select className='dropdown'>
                        <option>SAGE</option>
                        <option>Web Analytics</option>
                        <option>SEO</option>

                       </select>
                        <input className='dropdown' type='text' placeholder='Ask Marco' style={{width:'70%',marginLeft:'10px',marginRight:'10px'}} value={question} onChange={(e)=>setquestion(e.target.value)} ></input>
                        <button className='button' onClick={()=>askanswer()}>Ask</button> 
            </div>
        </>
}

export default Inputs;