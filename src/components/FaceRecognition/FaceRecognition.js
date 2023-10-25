import React from "react";

const FaceRecognition = ({imageInput}) => {
    return (
        <div className="center w-40 ma3">
            <img src={imageInput} alt="" />
        </div>
    )
}

export default FaceRecognition