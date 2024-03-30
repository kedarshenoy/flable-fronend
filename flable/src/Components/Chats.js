import { useState } from 'react';
import '../Styles/chats.css'
import Inputs from './Input';
import {chatsarrayAtom} from '../atoms';
import { useRecoilState } from 'recoil';
import html2pdf from 'html2pdf.js';
const Chat=({questions,setquestions})=>{
    const [num,setnum]=useState(0);

    const render=()=>{
        let ans=[]
        for(let i=0;i<questions.length;i++) {
                     
           ans.push( <div className='chats'>
                  <div className='questionaskedbox'> 
                  <div className='days'>{questions[i].time}</div>
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
                                  <div className='days'>{questions[i].time} </div>
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

    const handleShare = async () => {
        try {
          await navigator.share({
            title: 'Share Data',
            text: 'Check out this data:',
            url: window.location.href,
            data: questions 
          });
          console.log('Data shared successfully');
        } catch (error) {
          console.error('Error sharing data:', error);
        }
      };


      const handleShare2 = () => {
        // Select the content you want to convert to PDF
        const content = document.getElementById('content-to-pdf');
    
        // Configure the PDF options
        const options = {
          filename: 'page.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
    
        // Convert the content to PDF
        html2pdf().set(options).from(content).save();
      };

    return <>
    <div className='chatdiv' style={{}}>
     <div className='sharebtns'>   <img src={require('../assets/share.png')  } alt='' height={"15px"} onClick={()=>handleShare()}></img><span onClick={()=>handleShare()}>Share</span> &nbsp;&nbsp;<img src={require('../assets/export.png') } alt='' height={"16px"} onClick={()=>handleShare2()}></img>     <span onClick={()=>handleShare2()}>Export </span>  </div>
    
        <div > 

            <div className='dayschat' id="content-to-pdf">
                
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

            <Inputs questions={questions} setquestions={setquestions}  ></Inputs>

        </div>
    </div>
    
    </>
}

export default Chat;

