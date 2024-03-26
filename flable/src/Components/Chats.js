import { useState } from 'react';
import '../Styles/chats.css'
import Inputs from './Input';
const Chat=()=>{
    const [c,setc]=useState('')
    const [questions,setquestions]=useState([
        {
            question:"First Question",
            answer:"First Answer",
            response:0
        },
        {
            question:"Second Question",
            answer:"Second Answer",
            response:1
        },
        {
            question:"third Question",
            answer:"third Answer",
            response:0
        },
        {
            question:"fourth Question",
            answer:"fourth Answer",
            response:1
        },
        {
            question:"fifth Question",
            answer:"fifth Answer",
            response:2
        }
    ])
    const render=()=>{
        let ans=[]
        for(let i=0;i<questions.length;i++) {
                     
           ans.push( <div className='chats'>
                  <div className='questionaskedbox'> 
                  <div className='days'>Today </div>
                  <div className='questionasked'>
                      {questions[i].question}
                      </div>
                      </div>
                      <div className='answergivenbox'>
                          <div style={{display:'flex'}}>
                              <div>
                                  <img src={require('../assets/round.png')} alt=''></img>
                              </div>
                              <div style={{marginLeft:"3px", width:'100%'}}>
                                  <div className='days'>Today </div>
                                  <div className='answergiven'> 
                                      {questions[i].answer} 
                                  </div>
                                  <div className='reactionicons'>
                                      
                                      {questions[i].response===1?<img className='icons' src={require('../assets/thumbs-up.png')} alt='' onClick={()=>change1(i)}></img>:<img className='icons' src={require('../assets/thumbs-up (1).png')} alt='' onClick={()=>change1(i)}></img>}
                                      {questions[i].response===2? <img className='icons' src={require('../assets/negative-vote (1).png')} alt='' onClick={()=>change2(i)}></img> :<img className='icons' src={require('../assets/negative-vote.png')} alt='' onClick={()=>change2(i)}></img>}
                                      <img className='icons' src={require('../assets/copy.png')} alt=''></img>
                                      
                                  </div>
                                  
                                  
                              </div>
                          
                          </div>

                      </div>
                  </div>)
          }
          return ans
    }

    const change1=(i)=>{
        // if(a===1){
        //     seta(0)
        // }else
        // seta(1);
setquestions(prevState=>{
    const updatedArray=[...prevState];
    let prevresponse=updatedArray[i].response;
    let tobe=0;
    if(prevresponse===1){
        tobe=0;
    }else tobe=1;
    updatedArray[i]={...updatedArray[i],response:tobe};
    return updatedArray;
})



        // let alter =questions;
        // if (alter[i].response===1){
        //     alter[i].response=0
        // }else alter[i].response=1
        //  setquestions(alter);
        // setc(0);
        // console.log(questions)
    }

    const change2=(i)=>{
        // let alter =questions;
        // if (alter[i].response===2){
        //     alter[i].response=0
        // }else alter[i].response=2
        // setquestions(alter);
        setquestions(prevState=>{
            const updatedArray=[...prevState];
            let prevresponse=updatedArray[i].response;
            let tobe=0;
            if(prevresponse===2){
                tobe=0;
            }else tobe=2;
            updatedArray[i]={...updatedArray[i],response:tobe};
            return updatedArray;
        })

    }
    return <>
    <div className='chatdiv' style={{}}>
     <div className='sharebtns'>   <img src={require('../assets/share.png')  } alt='' height={"15px"}></img>Share &nbsp;&nbsp;<img src={require('../assets/export.png') } alt='' height={"16px"}></img>      Export </div>
    
        <div > 

            <div className='dayschat'>
                
                {/* <div className='chats'>
                    <div className='questionaskedbox'> 
                    <div className='days'>Today </div>
                    <div className='questionasked'>
                        What is this ?
                    </div>
                    </div>
                    <div className='answergivenbox'>
                        <div style={{display:'flex'}}>
                            <div>
                                <img src={require('../assets/round.png')} alt=''></img>
                            </div>
                            <div style={{marginLeft:"3px", width:'100%'}}>
                                <div className='days'>Today </div>
                                <div className='answergiven'> 
                                    What is this ?ote that the development build is not optimized.
                                    To create a production build, use npm run build. ote that the development build is not optimized.
                                    To create a production build, use npm run build. 
                                </div>
                                <div className='reactionicons'>
                                    
                                    {a===1?<img className='icons' src={require('../assets/thumbs-up.png')} alt='' onClick={()=>change1()}></img>:<img className='icons' src={require('../assets/thumbs-up (1).png')} alt='' onClick={()=>change1()}></img>}
                                    {a===2? <img className='icons' src={require('../assets/negative-vote (1).png')} alt='' onClick={()=>change2()}></img> :<img className='icons' src={require('../assets/negative-vote.png')} alt='' onClick={()=>change2()}></img>}
                                    <img className='icons' src={require('../assets/copy.png')} alt=''></img>
                                     
                                 </div>
                                
                                
                            </div>
                        
                        </div>

                    </div>
                </div> */}
                {
                 render()
                }
                



            </div>

            <Inputs></Inputs>

        </div>
    </div>
    
    </>
}

export default Chat;

