const { info } = require('./config/logger');
const express = require('express');

const env = require('./config/config');
const prisma = require('./config/prisma');
const { PORT } = env;
const app = express();

const { request, response } = express;

// middlewares
app.use(express.json());

app.get('/heartbeat', async function (request, response) {
    let result = await prisma.$executeRaw('SELECT 1');
    if (result == 1) {
        return response.json({ heartbeat: true, status: response.statusCode }).status(200)
    }
    return response.json({ heartbeat: false, status: response.statusCode }).status(500)
})

app.listen(PORT || 80, () => {
    info(`[\u2713] Server running on Port: ${PORT}`);
});