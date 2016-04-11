'use strict';
const Hapi = require('hapi');

const server = new Hapi.Server();
const constants = require('./src/config/constants');
const routes = require('./src/routes');

server.connection({ port: constants.PORT, host: constants.HOST });

server.route(routes);

server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});
