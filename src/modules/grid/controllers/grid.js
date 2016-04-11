'use strict';
const Boom = require('boom');
const lineParser = require('../middleware/line-parser');

module.exports = {
  parse: function (request, reply) {
      let text = request.payload.text;
      if (!text) {
        reply(Boom.badRequest('text is required'));
      } else {
        try {
          reply(lineParser.parseToGrid(request.payload.text));
        } catch (e) {
          reply(Boom.badRequest(e.message));
        }
      }
  }
};
