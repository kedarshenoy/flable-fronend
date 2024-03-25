
import './main.css'
import Chat from './Chats'

const Main=({isPanelOpen})=>{
    const date= new Date()
    return <>
   <div className="histroybox" style={{marginLeft: isPanelOpen ? '1%' : '-15%' ,transition: "left 0.3s ease",paddingTop:"20px"}}>
    <div className='histryboxhead'>
       <div ><b>History</b> </div> 
       <button className='button'>New Chat</button> 
    </div>

    <div className='historydatabox'>
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
    </div>

    <div className='historydatabox'>
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
    </div><div className='historydatabox'>
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
    </div>  <div className='historydatabox'>
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
    </div><div className='historydatabox'>
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
    </div><div className='historydatabox'>
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
    </div>

    
    </div>
     <Chat></Chat>
    </>
}

export default Main;