import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../styles/QuoteStyle.sass';

const Quote = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [quote, setQuote] = useState('');

    useEffect(() => {
        const getCurrentDate = () => {
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = today.getFullYear().toString().slice(-2);
            return `${day}.${month}.${year}`;
        };

        setCurrentDate(getCurrentDate());

        const fetchQuote = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/quote');
                setQuote(response.data.quote);
            } catch (error) {
                console.error('Ошибка при получении цитаты', error);
            }
        };

        fetchQuote();
    }, []);

    return (
        <div className="container">
            <h1>Quote</h1>
            <p className="date">день: {currentDate}</p>
            <p className="quote">«{quote}»</p>
        </div>
    );
};

export default Quote;
