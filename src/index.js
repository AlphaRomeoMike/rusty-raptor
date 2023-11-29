const { info } = require('./config/logger');
const express = require('express');

const { PORT } = env;
const env = require('./config/config');

const app = express();

app.use(express.json());

app.listen(PORT || 80, () => {
    info(`[\u2713] Server running on Port: ${PORT}`);
});