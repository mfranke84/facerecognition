import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import '../Logo/Logo.css'

const Logo = () => {
    return(
        <div>
            <Tilt className="ma3 br2 ba b--black-30 shadow-2 " style={{width:'120px', height: '120px', display:'flex', justifyContent: 'center', alignItems:'center'}}>
                <img style={{width:'100px', height: '100px'}}src={brain} alt="" />
            </Tilt>
        </div>
        
    )
}

export default Logo