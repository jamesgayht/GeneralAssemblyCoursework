// import necessary libraries and modules
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../server'); // replace '../app' with the path to your express app file

// Tell Chai to use the chai-http plugin
chai.use(chaiHttp);

describe('Express app', () => {
  // Declare the array we will use for testing
  let users = [];

  // Clear the array after each test
  afterEach(() => {
    users = [];
  });

  it('should greet user with custom name', (done) => {
    const name = 'TestUser';
    chai.request(app)
      .get(`/greeting/${name}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.equal(`Wow! Hello there, ${name}!`);
        done();
      });
  });

  it('should add a user', (done) => {
    const name = 'TestUser';
    chai.request(app)
      .post('/user')
      .send({ name: name })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.equal(`User ${name} added successfully.`);
        users.push(name); // Add user to the array for subsequent tests
        done();
      });
  });

  it('should list users', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.include('TestUser');
        done();
      });
  });
});