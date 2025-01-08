const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('your-mongo-uri', { useNewUrlParser: true, useUnifiedTopology: true });

const tradeSchema = new mongoose.Schema({
    date: String,
    entry: Number,
    exit: Number,
    investment: Number,
    notes: String,
});

const Trade = mongoose.model('Trade', tradeSchema);

// Add a trade
app.post('/api/trades', async (req, res) => {
    const trade = new Trade(req.body);
    await trade.save();
    res.json(trade);
});

// Get all trades
app.get('/api/trades', async (req, res) => {
    const trades = await Trade.find();
    res.json(trades);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
