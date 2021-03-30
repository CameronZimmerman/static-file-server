const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('should return hi when get requesting "/" ', async() => {
    const data = await request(app)
      .get('/');
    expect(data.body).toEqual('hi');
  });
});
