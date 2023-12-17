import React from "react";
import Logo from "../Logo/Logo";

const Navigation = ({onRouteChange, isSignedIn}) => {
    
    if (isSignedIn){
        return (
            <nav style={{display: 'flex', justifyContent: 'space-between'}} >
                    <Logo />
                <nav style={{}}>
                <p 
                    onClick={() => onRouteChange('signin')}
                    className="f3 link dim white underline pa3 pointer">
                        Sign Out</p>
                </nav>
            </nav>
        )
    } 
    else{
        return(
            <nav style={{display: 'flex', justifyContent: 'space-between'}} >
                <Logo />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <p 
                        onClick={() => onRouteChange('signin')}
                        className="f3 link dim white underline pa3 pointer">
                            Sign In</p>
                <p 
                        onClick={() => onRouteChange('register')}
                        className="f3 link dim white underline pa3 pointer">
                            Register</p>
                </div> 
            </nav>
        )
    }
    
    
}

export default Navigation