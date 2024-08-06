const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

const quotes = require('../quotesArr/quotes');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json({ quote: randomQuote });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
