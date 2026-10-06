const http = require('http');
const app = require('./app');
const { loadPlanetData } = require('./route/planets/planets.controller');
const server = http.createServer(app);

const PORT = process.env.PORT || 8000;
async function startServer() {
    await loadPlanetData();
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

startServer();