import React from "react";


const Rank = ({user, entries}) => {
    return(
        <div>
            <div className="f4">
                {`${user} your current rank is...`}
            </div>
            <div className="f1" >
                {entries}
            </div>
        </div>

    )
}

export default Rank