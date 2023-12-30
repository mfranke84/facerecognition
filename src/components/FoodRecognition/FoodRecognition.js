import React from "react";
import './FoodRecognition.css'

const createFoodListItems = (foodList) => {
    console.log(foodList);
    
} 

const FoodRecognition = ({ imageInput, foodList }) => {
    createFoodListItems(foodList);    
    return(
        <div className="center ma">
            <div id="imageContainer" className="absolute mt2 fl w-70">
                <img className="fl w-50" id="inputImage" src={imageInput} alt="" width='500px' height='auto' />
                <div className="fl w-50">
                <div id="concepts">
                    <div id="concept" className="flex">
                        <div id="concept-name" className="pa2 tl w-50">
                            <svg width="19" height="19" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7268 8.94016L8.94683 13.7202C8.823 13.8441 8.67595 13.9425 8.51408 14.0096C8.35222 14.0767 8.17872 14.1112 8.0035 14.1112C7.82828 14.1112 7.65477 14.0767 7.49291 14.0096C7.33105 13.9425 7.18399 13.8441 7.06016 13.7202L1.3335 8.00016V1.3335H8.00016L13.7268 7.06016C13.9752 7.30998 14.1146 7.64792 14.1146 8.00016C14.1146 8.35241 13.9752 8.69035 13.7268 8.94016V8.94016Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M4.6665 4.6665H4.67317" stroke="#344054" stroke-width="1.66" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>cheese
                        </div>
                        <div id="concept-value" className="pa2 tr w-50">0.457</div>
                    </div>
        </div>
                </div>
            </div>
    </div>
    )
    
}
export default FoodRecognition;