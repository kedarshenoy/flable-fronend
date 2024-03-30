
import '../Styles/main.css'
import Chat from './Chats'
import {useRecoilState,useSetRecoilState}from 'recoil';
import {questionsatom} from '../atoms';
import {chatAtom} from '../atoms';
import { chatsarrayAtom } from '../atoms';
import axios from 'axios';


const Main=({isPanelOpen})=>{
    const [gethistory,addhistory]=useRecoilState(questionsatom);
    const [chat,setchat]=useRecoilState(chatAtom);
    const [mainchat,setmain]=useRecoilState(chatsarrayAtom)
    const [questions,setquestions]=useRecoilState(chatsarrayAtom)

    const date= new Date();


    const getchats=async()=>{
        const ans=await axios.get('http://localhost:5402/questions', {
            data: { userID:1, Chatno:chat }
          })
          setmain(ans.data)
    }

    const newchat=async ()=>{
        axios.post('http://localhost:5402/createnewchat', {
                userid:1,
          }).then(res=>{
              setchat(res.data.chatno);
              setquestions([])
          }).catch(err=>alert("somthing went wrong"))
        

    }


    const display = () => {
        return gethistory.map((item, index) => (
            
            <div key={index} className='historydatabox' onClick={()=>{setchat(item.Chatno);getchats()}} >
                <div className='dates'>
                    {item.time}
                </div>
                <div className='questions'>
                    <b>{item.question}</b>
                </div>
                <div className='answersgenerated'>
                    {item.answer}
                </div>
                
            </div>
        ));
    }

    return <>
   <div className="histroybox" style={{marginLeft: isPanelOpen ? '1%' : '-15%' ,transition: "left 0.3s ease",paddingTop:"20px"}}>
    <div className='histryboxhead'>
       <div ><b>History</b> </div> 
       <button className='button' onClick={()=>{newchat()}}>New Chat</button> 
    </div>

    {/* <div className='historydatabox'>
        <div className='dates'>
            {date.toDateString()
            } 
            
        </div>
        <div className='questions'>
           <b>
           What is this?Note that the development build is not optimized.
            To create a production build    
           </b>
        </div>
        <div className='answersgenerated'>
            What is this?Note that the development build is not optimized.
            To create a production build
        </div>
    </div> */}
    {
        display()
    }
    

    
    </div>
     <Chat questions={mainchat} setquestions={setmain}></Chat>
    </>
}

export default Main;