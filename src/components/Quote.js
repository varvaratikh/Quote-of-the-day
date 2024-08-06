import React from "react";
import '../styles/QuoteStyle.sass';

const Quote = () => {
    const getCurrentDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear().toString().slice(-2);
        return `${day}.${month}.${year}`;
    };

    const currentDate = getCurrentDate();

    return (
        <div className="container">
            <h1>Quote</h1>
            <p>день: {currentDate}</p>
        </div>
    );
};

export default Quote;
