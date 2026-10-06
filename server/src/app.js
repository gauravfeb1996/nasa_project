const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const planetsRouter = require('./route/planets/planets.router');
const launchesRouter = require('./route/launches/launches.route');
const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(planetsRouter);
app.use('/launches', launchesRouter)


app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
})

app.use(morgan('combined'));

module.exports = app;
