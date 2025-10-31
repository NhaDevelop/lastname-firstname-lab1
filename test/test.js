const request = require('supertest');
const express = require('express');
const { expect } = require('chai');

const app = express();
app.get('/', (req, res) => res.send('Hello, world!'));

describe('GET /', () => {
  it('should return Hello, world!', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Hello, world!');
  });
});
