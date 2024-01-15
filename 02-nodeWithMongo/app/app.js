const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs').promises;

const app = express();

mongoose.connect('mongodb://mongonodeserver:27017/mydatabase');

const counterSchema = new mongoose.Schema({
    count: { type: Number, default: 0 },
});

const Counter = mongoose.model('Counter', counterSchema);

app.get('/', async (req, res) => {
    try {
        const result = await Counter.findOneAndUpdate({}, { $inc: { count: 1 } }, { upsert: true, new: true });

        await fs.writeFile('/app/data/counter.txt', result.count.toString());

        res.send(`Hello! You are visitor number ${result.count}`);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
