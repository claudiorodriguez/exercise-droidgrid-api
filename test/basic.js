'use strict';

const chai = require('chai');

const expect = chai.expect,
    assert = chai.assert;

const Hapi = require('hapi');
const constants = require('../src/config/constants');
const routes = require('../src/routes');
let server;

// Test server setup //

before(function (done) {
    server = new Hapi.Server();
    server.connection({
      host: constants.TEST_HOST,
      port: constants.TEST_PORT
    });
    server.route(routes);
    done();
});

// ----- Basic tests ----- //

exports['grid request'] = {
  // Provided spec, in api request format
  'basic': function(done) {
    const testText = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';
    const expectedResponse = '{"width":6,"height":6,"droids":[{"x":1,"y":3,"facing":"north"},{"x":5,"y":1,"facing":"east"}]}';

    server.inject({method: 'POST', url: '/grid', payload: {text: testText}}, function (res) {
        assert(res.statusCode === 200);
        expect(JSON.stringify(res.result)).to.eql(expectedResponse);
        done();
    });
  }
};
