import React from "react";
import Logo from "../Logo/Logo";

const Navigation = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}} >
             <Logo />
            <nav style={{}}>
            <p className="f3 link dim white underline pa3 pointer">Sign Out</p>
            </nav>
           


        </div>
    )
}

export default Navigation