import '../Styles/inputs.css';


const Inputs=()=>{
return <>
            <div className='inputboxes'>
                       <select className='dropdown'>
                        <option>SAGE</option>
                        <option>Web Analytics</option>
                        <option>SEO</option>

                       </select>
                        <input className='dropdown' type='text' placeholder='Ask Marco' style={{width:'70%',marginLeft:'10px',marginRight:'10px'}}></input>
                        <button className='button'>Ask</button> 
            </div>
        </>
}

export default Inputs;