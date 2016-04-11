'use strict';

module.exports = {
  HOST: process.env.NODE_HOST || '0.0.0.0',
  PORT: process.env.NODE_PORT || 3000,
  TEST_HOST: process.env.NODE_HOST || '0.0.0.0',
  TEST_PORT: process.env.NODE_PORT || 8888
};
