
import './chats.css'
import Inputs from './Input';
const Chat=()=>{
    return <>
    <div className='chatdiv' style={{}}>
     <div className='sharebtns'>   <img src={require('../assets/share.png')  } alt='' height={"15px"}></img>Share &nbsp;&nbsp;<img src={require('../assets/export.png') } alt='' height={"16px"}></img>      Export </div>
    
        <div > 

            <div className='dayschat'>
                
                <div className='chats'>
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
                                    
                                    <img className='icons' src={require('../assets/thumbs-up (1).png')} alt=''></img>
                                    <img className='icons' src={require('../assets/negative-vote.png')} alt=''></img>
                                    <img className='icons' src={require('../assets/copy.png')} alt=''></img>
                                     
                                 </div>
                                
                                
                            </div>
                        
                        </div>

                    </div>
                </div>

                



            </div>

            <Inputs></Inputs>

        </div>
    </div>
    
    </>
}

export default Chat;