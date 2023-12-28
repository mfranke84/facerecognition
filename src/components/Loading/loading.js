import React from "react";
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className="dark-gray center ">
            <ReactLoading type="balls" color="#000" height={'15%'} width={'15%'} />
        </div>
    );
};


export default Loading