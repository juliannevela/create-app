const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');

describe('{{appName}} routes', () => {
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
});
