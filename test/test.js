const request = require('supertest');
const { expect } = require('chai');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

describe('GET /', () => {
  it('should return Hello, Node.js!', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Hello, Node.js!');
  });
});
