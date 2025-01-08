const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('MongoDB connection error:', err));

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
