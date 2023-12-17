import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageInput, faceBox }) => {
    return (
        <div className="center ma">
            <div id="imageContainer" className="absolute mt2">
                <img id="inputImage" src={imageInput} alt="" width='500px' height='auto'/>
                <div className="bounding_box" style={{top: faceBox.top, right: faceBox.right, bottom: faceBox.bottom, left: faceBox.left}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition