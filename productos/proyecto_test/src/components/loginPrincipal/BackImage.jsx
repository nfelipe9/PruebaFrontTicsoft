import React from 'react'
import '../cssStyles/loginStyle/loginStyles.css'
import LogoPng from '../assets/LoginImagen/Logo.png'


const BackImage = () => {
    return (
        <div className="back" style={{ width: "100%", height: "100%" }} >
            <div id="sort" >
                <img className="logo" src={LogoPng} alt="logo" />
            </div>
        </div>
    )
}

export default BackImage;