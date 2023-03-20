import { expect } from 'chai';
import supertest from 'supertest';
import { app } from '../../src/infrastructure/app';

const request = supertest(app);

describe('GET /ping', () => {
  it('should return 200 OK and the message "pong"', async () => {
    const res = await request.get('/ping');
    expect(res.status).to.equal(200);
    expect(res.body).to.eql({ message: 'pong' });
  })
})

describe('GET /coins/price', () => {
  it('should return 200 OK and the message should contain the coins price', async () => {
    const res = await request.get('/coins/price');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('bitcoin');
    expect(res.body).to.have.property('ethereum');
  })
})

describe('GET /address/:address', () => {
  it('should return 200 OK and the body should contain the address info with every transactions', async () => {
    const res = await request.get('/address/3F9L2XrrdLkWKayjrN6sWY86vkP4eDoe9b');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('address');
    expect(res.body).to.have.property('total_received');
    expect(res.body).to.have.property('total_sent');
    expect(res.body).to.have.property('balance');
    expect(res.body.txrefs.length).to.be.greaterThan(50);
  })

  it.skip('should return 200 OK and the body should contain the address info with 50 transactions for the second page', async () => {
    const res = await request.get('/address/3F9L2XrrdLkWKayjrN6sWY86vkP4eDoe9b?page=2');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('hash160');
    expect(res.body).to.have.property('address');
    expect(res.body).to.have.property('n_tx');
    expect(res.body).to.have.property('total_received');
    expect(res.body).to.have.property('total_sent');
    expect(res.body).to.have.property('final_balance');
    expect(res.body).to.have.property('txs');
    expect(res.body.txs).to.have.lengthOf(50);
  })

  it.skip('should return 200 OK and the body should contain the address info without any transactions because we sent page=100 and there is not that amount of transactions', async () => {
    const res = await request.get('/address/3F9L2XrrdLkWKayjrN6sWY86vkP4eDoe9b?page=100');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('hash160');
    expect(res.body).to.have.property('address');
    expect(res.body).to.have.property('n_tx');
    expect(res.body).to.have.property('total_received');
    expect(res.body).to.have.property('total_sent');
    expect(res.body).to.have.property('final_balance');
    expect(res.body).to.have.property('txs');
    expect(res.body.txs).to.have.lengthOf(0);
  })
})