const express = require('express');
const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} request received for ${req.url}`);
    next();
};

app.use(logger);

app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
    res.send('Welcome to About Page');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});