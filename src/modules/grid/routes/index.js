'use strict';

const gridController = require('../controllers/grid');

module.exports = [{
    method: ['POST'],
    path: '/grid',
    handler: gridController.parse
}];
