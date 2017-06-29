const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/server/server');
const should = chai.should();

let jamData = require('../../api/jam-data').jam;

chai.use(chaiHttp);

describe('Root', () => {
  it('Should return 200 on valid request', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {

        res.should.have.status(200);

        done();
      });
  });
});

describe('Index', () => {
  it('Should return index page on valid request', (done) => {
    chai.request(server)
      .get('/index')
      .end((err, res) => {
        res.should.be.html;

        done();
      });
  });
});

describe('ShowJam', () => {
  it('Should return jam array on valid request', (done) => {
    chai.request(server)
      .get('/showJam')
      .end((err, res) => {

        let result = res.body;
        result.types.should.be.an('array');

        done();
      });
  });
});

describe('AddJam', () => {
  it('Should add 1 new jam into jam array', (done) => {
    let newJam = 'Apple';

    chai.request(server)
      .post('/addJam')
      .send({jam: newJam})
      .end((err, res) => {

        res.should.have.status(200);
        jamData.types.should.be.an('array').that.does.include(newJam);
        done();
      });
  });

  it('Should return bad request on null jam', (done) => {
    let newJam = null;

    chai.request(server)
      .post('/addJam')
      .send({jam: newJam})
      .end((err, res) => {

        res.should.have.status(400);
        err.message.should.contain('Bad Request');

        done();
      });
  });

  it('Should return bad request on numeric jam', (done) => {
    let newJam = 1234;

    chai.request(server)
      .post('/addJam')
      .send({jam: newJam})
      .end((err, res) => {

        res.should.have.status(400);
        err.message.should.contain('Bad Request');

        done();
      });
  });

  it('Should return bad request on null body', (done) => {
    chai.request(server)
      .post('/addJam')
      .send(null)
      .end((err, res) => {

        res.should.have.status(400);
        err.message.should.contain('Bad Request');

        done();
      });
  });
});
