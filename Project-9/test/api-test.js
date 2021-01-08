var chai = require('chai');
var expect = chai.expect;
var chaiHttp  = require('chai-http');
chai.use(chaiHttp);

describe('Testing  my Rest Api', () => {
    it('should  return status 200 for /',function(done){
        chai
            .request('http://localhost:6800')
            .get('/')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err)
            })
    });

    it('should  return status 200 for /movies',function(done){
        chai
            .request('http://localhost:6800')
            .get('/movies')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err)
            })
    })
    it('should return the status 404', function(done){
        chai
            .request('http://localhost:6800')
            .get('/movie')
            .then(function(res){
                expect(res).to.have.status(404);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });
})