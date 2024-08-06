import React from 'react';
import '../styles/MainPage.sass';
import sea from "../images/sea.png";
import Quote from "../components/Quote";

const Main = () => {

    return (
        <div className="main">
            <img className='sea' src={sea} alt="sea"/>
            <Quote/>
        </div>
    );
};

export default Main;