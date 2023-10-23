import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
        <div>
            <p className="f3 center">
                {'This Magic Brain will detect faces in your pictures. Give it a try'}
            </p>
            <div className="center">
                <div className="form pa4 br3 shadow-5">
                    <input className='f4 pa2 w-70'  type="text" />
                    <button className="ma3 w-20 f4 grow link ph3 pv2 dib grey br1" >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm