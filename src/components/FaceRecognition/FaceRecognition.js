import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({imageInput}) => {
    return (
        <div className="center ma">
            <div id="imageContainer" className="absolute mt2">
                <img id="inputImage" src={imageInput} alt="" width='500px' height='auto'/>
            </div>
        </div>
    )
}

export default FaceRecognition