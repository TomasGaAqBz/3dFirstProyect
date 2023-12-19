import React from "react";
import { Link } from 'react-router-dom'
import  arrow from '../../assets/icon/arrow.svg'

const InfoBox = ({ text, link, btnText }) => {
    return(
        <div className='info-box text-center'>
            <p className="font-medium sm:text-xl text-center">{text}</p>
            <br />
            <Link to={link} className="neo-brutalism-white neo-btn">{btnText}</Link>
            
      
            <img src={arrow} className="w-4 h-4 object-contain" />
        </div>
    );
};

export default InfoBox;
