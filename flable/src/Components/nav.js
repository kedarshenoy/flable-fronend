
import './nac.css'
import {useState} from 'react'
import Main from './main';


const Navbar=()=>{
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const togglePanel = () => {
      setIsPanelOpen(!isPanelOpen);
    };
    return <>
    <div className="Navbars">
        <div className="leftnav">
        <img src={require('../assets/logo.png')} alt="" className='logoimg'/>
        <img src={require('../assets/dropdown.webp')} alt="" onClick={togglePanel} className='logoimg2'/>
        
        </div>
        <div className="navright">
        <div style={{textAlign:"right"}}>
            akedarshenoy@gmail.com <br/>
            Admin
        </div>
        <img src={require('../assets/prof.png')} alt={require('../assets/prof.png')} className='profimg'/>
            
        </div>
    </div> 

    <div style={{display:'flex'}}>
    <div className={`Slidingbar ${isPanelOpen ? 'open' : ''}`}>
        <div className='option'><b>Marco</b></div >
        <div className='option'><b>Social Watch</b> </div >
        <div className='option'><b>Web Analytics</b></div >

    </div>
    <Main isPanelOpen={isPanelOpen}></Main>
    </div>
    </>
}

export default Navbar;